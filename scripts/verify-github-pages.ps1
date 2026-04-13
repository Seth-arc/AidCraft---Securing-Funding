$repoRoot = Split-Path -Parent $PSScriptRoot
$errors = New-Object System.Collections.Generic.List[string]

$requiredFiles = @(
    '.github/workflows/deploy-pages.yml',
    '.nojekyll',
    '404.html',
    'app.html',
    'js/site-paths.js',
    'README.md'
)

foreach ($relativePath in $requiredFiles) {
    $fullPath = Join-Path $repoRoot $relativePath
    if (-not (Test-Path -LiteralPath $fullPath)) {
        $errors.Add("Missing required file: $relativePath")
    }
}

$pagesNeedingHelper = @(
    'index.html',
    'app.html',
    'loading.html',
    'offers-loading.html'
)

foreach ($page in $pagesNeedingHelper) {
    $pagePath = Join-Path $repoRoot $page
    if (-not (Test-Path -LiteralPath $pagePath)) {
        $errors.Add("Missing page: $page")
        continue
    }

    $content = Get-Content -LiteralPath $pagePath -Raw
    if ($content -notmatch 'js/site-paths\.js') {
        $errors.Add("Missing site-paths helper reference in $page")
    }
}

$scriptPath = Join-Path $repoRoot 'script.js'
if (Test-Path -LiteralPath $scriptPath) {
    $scriptContent = Get-Content -LiteralPath $scriptPath -Raw
    $forbiddenRedirects = @(
        "window.location.href = '/'",
        "window.location.href = '/profile'",
        "window.location.href = '/logout'"
    )

    foreach ($redirect in $forbiddenRedirects) {
        if ($scriptContent.Contains($redirect)) {
            $errors.Add("Found forbidden root redirect in script.js: $redirect")
        }
    }

    if ($scriptContent -notmatch 'function switchTab\(targetId, options = \{\}\)') {
        $errors.Add('Expected switchTab to accept routing options.')
    }
}
else {
    $errors.Add('Missing script.js')
}

$workflowPath = Join-Path $repoRoot '.github/workflows/deploy-pages.yml'
if (Test-Path -LiteralPath $workflowPath) {
    $workflowContent = Get-Content -LiteralPath $workflowPath -Raw
    if ($workflowContent -notmatch 'actions/deploy-pages@v4') {
        $errors.Add('GitHub Pages workflow is missing actions/deploy-pages@v4.')
    }
    if ($workflowContent -notmatch 'actions/upload-pages-artifact@v4') {
        $errors.Add('GitHub Pages workflow is missing actions/upload-pages-artifact@v4.')
    }
}

if ($errors.Count -gt 0) {
    foreach ($message in $errors) {
        Write-Error $message
    }
    exit 1
}

Write-Host 'GitHub Pages validation passed.'
