using ApodizationFunctions
using Documenter

DocMeta.setdocmeta!(ApodizationFunctions, :DocTestSetup, :(using ApodizationFunctions); recursive=true)

makedocs(;
    modules=[ApodizationFunctions],
    authors="Arnold",
    repo="https://github.com/a-r-n-o-l-d/ApodizationFunctions.jl/blob/{commit}{path}#{line}",
    sitename="ApodizationFunctions.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://a-r-n-o-l-d.github.io/ApodizationFunctions.jl",
        edit_link="main",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
    ],
)

deploydocs(;
    repo="github.com/a-r-n-o-l-d/ApodizationFunctions.jl",
    devbranch="main",
)
