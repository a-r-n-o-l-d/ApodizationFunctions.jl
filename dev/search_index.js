var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = ApodizationFunctions","category":"page"},{"location":"#ApodizationFunctions","page":"Home","title":"ApodizationFunctions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for ApodizationFunctions.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ApodizationFunctions]","category":"page"},{"location":"#ApodizationFunctions.BartlettApodization","page":"Home","title":"ApodizationFunctions.BartlettApodization","text":"ApodizationFunctions.BartlettApodization(sz; kwargs...)\n\nCreate a N-dimensionnal apodization function ApodizationFunctions.BartlettApodization, with  size sz defined as a single Int (1-dimensionnal) or a tuple of Int.\n\nFor kwargs definitions see bartlett function in package  DSP.jl.\n\nExample\n\njulia> apod = ApodizationFunctions.BartlettApodization((4, 4, 4));\n\njulia> A = rand(4, 4, 4);\n\njulia> apod(A)\n4×4×4 Array{Float64, 3}:\n...\n\n\n\n\n\n","category":"type"},{"location":"#ApodizationFunctions.BartlettHannApodization","page":"Home","title":"ApodizationFunctions.BartlettHannApodization","text":"ApodizationFunctions.BartlettHannApodization(sz; kwargs...)\n\nCreate a N-dimensionnal apodization function ApodizationFunctions.BartlettHannApodization, with  size sz defined as a single Int (1-dimensionnal) or a tuple of Int.\n\nFor kwargs definitions see bartlett_hann function in package  DSP.jl.\n\nExample\n\njulia> apod = ApodizationFunctions.BartlettHannApodization((4, 4, 4));\n\njulia> A = rand(4, 4, 4);\n\njulia> apod(A)\n4×4×4 Array{Float64, 3}:\n...\n\n\n\n\n\n","category":"type"},{"location":"#ApodizationFunctions.BlackmanApodization","page":"Home","title":"ApodizationFunctions.BlackmanApodization","text":"ApodizationFunctions.BlackmanApodization(sz; kwargs...)\n\nCreate a N-dimensionnal apodization function ApodizationFunctions.BlackmanApodization, with  size sz defined as a single Int (1-dimensionnal) or a tuple of Int.\n\nFor kwargs definitions see blackman function in package  DSP.jl.\n\nExample\n\njulia> apod = ApodizationFunctions.BlackmanApodization((4, 4, 4));\n\njulia> A = rand(4, 4, 4);\n\njulia> apod(A)\n4×4×4 Array{Float64, 3}:\n...\n\n\n\n\n\n","category":"type"},{"location":"#ApodizationFunctions.CosineApodization","page":"Home","title":"ApodizationFunctions.CosineApodization","text":"ApodizationFunctions.CosineApodization(sz; kwargs...)\n\nCreate a N-dimensionnal apodization function ApodizationFunctions.CosineApodization, with  size sz defined as a single Int (1-dimensionnal) or a tuple of Int.\n\nFor kwargs definitions see cosine function in package  DSP.jl.\n\nExample\n\njulia> apod = ApodizationFunctions.CosineApodization((4, 4, 4));\n\njulia> A = rand(4, 4, 4);\n\njulia> apod(A)\n4×4×4 Array{Float64, 3}:\n...\n\n\n\n\n\n","category":"type"},{"location":"#ApodizationFunctions.GaussianApodization","page":"Home","title":"ApodizationFunctions.GaussianApodization","text":"ApodizationFunctions.GaussianApodization(sz, par; kwargs...)\n\nCreate a a N-dimensionnal apodization function ApodizationFunctions.GaussianApodization, with size sz defined as a single Int (1-dimensionnal) or a tuple of Int.\n\nFor par and kwargs definitions see gaussian function in package  DSP.jl.\n\nExample\n\njulia> apod = ApodizationFunctions.GaussianApodization((4, 4, 4), 0.5);\n\njulia> A = rand(4, 4, 4);\n\njulia> apod(A)\n4×4×4 Array{Float64, 3}:\n...\n\n\n\n\n\n","category":"type"},{"location":"#ApodizationFunctions.HammingApodization","page":"Home","title":"ApodizationFunctions.HammingApodization","text":"ApodizationFunctions.HammingApodization(sz; kwargs...)\n\nCreate a N-dimensionnal apodization function ApodizationFunctions.HammingApodization, with  size sz defined as a single Int (1-dimensionnal) or a tuple of Int.\n\nFor kwargs definitions see hamming function in package  DSP.jl.\n\nExample\n\njulia> apod = ApodizationFunctions.HammingApodization((4, 4, 4));\n\njulia> A = rand(4, 4, 4);\n\njulia> apod(A)\n4×4×4 Array{Float64, 3}:\n...\n\n\n\n\n\n","category":"type"},{"location":"#ApodizationFunctions.HanningApodization","page":"Home","title":"ApodizationFunctions.HanningApodization","text":"ApodizationFunctions.HanningApodization(sz; kwargs...)\n\nCreate a N-dimensionnal apodization function ApodizationFunctions.HanningApodization, with  size sz defined as a single Int (1-dimensionnal) or a tuple of Int.\n\nFor kwargs definitions see hanning function in package  DSP.jl.\n\nExample\n\njulia> apod = ApodizationFunctions.HanningApodization((4, 4, 4));\n\njulia> A = rand(4, 4, 4);\n\njulia> apod(A)\n4×4×4 Array{Float64, 3}:\n...\n\n\n\n\n\n","category":"type"},{"location":"#ApodizationFunctions.KaiserApodization","page":"Home","title":"ApodizationFunctions.KaiserApodization","text":"ApodizationFunctions.KaiserApodization(sz, par; kwargs...)\n\nCreate a a N-dimensionnal apodization function ApodizationFunctions.KaiserApodization, with size sz defined as a single Int (1-dimensionnal) or a tuple of Int.\n\nFor par and kwargs definitions see kaiser function in package  DSP.jl.\n\nExample\n\njulia> apod = ApodizationFunctions.KaiserApodization((4, 4, 4), 0.5);\n\njulia> A = rand(4, 4, 4);\n\njulia> apod(A)\n4×4×4 Array{Float64, 3}:\n...\n\n\n\n\n\n","category":"type"},{"location":"#ApodizationFunctions.LanczosApodization","page":"Home","title":"ApodizationFunctions.LanczosApodization","text":"ApodizationFunctions.LanczosApodization(sz; kwargs...)\n\nCreate a N-dimensionnal apodization function ApodizationFunctions.LanczosApodization, with  size sz defined as a single Int (1-dimensionnal) or a tuple of Int.\n\nFor kwargs definitions see lanczos function in package  DSP.jl.\n\nExample\n\njulia> apod = ApodizationFunctions.LanczosApodization((4, 4, 4));\n\njulia> A = rand(4, 4, 4);\n\njulia> apod(A)\n4×4×4 Array{Float64, 3}:\n...\n\n\n\n\n\n","category":"type"},{"location":"#ApodizationFunctions.RectApodization","page":"Home","title":"ApodizationFunctions.RectApodization","text":"ApodizationFunctions.RectApodization(sz; kwargs...)\n\nCreate a N-dimensionnal apodization function ApodizationFunctions.RectApodization, with  size sz defined as a single Int (1-dimensionnal) or a tuple of Int.\n\nFor kwargs definitions see rect function in package  DSP.jl.\n\nExample\n\njulia> apod = ApodizationFunctions.RectApodization((4, 4, 4));\n\njulia> A = rand(4, 4, 4);\n\njulia> apod(A)\n4×4×4 Array{Float64, 3}:\n...\n\n\n\n\n\n","category":"type"},{"location":"#ApodizationFunctions.TriangApodization","page":"Home","title":"ApodizationFunctions.TriangApodization","text":"ApodizationFunctions.TriangApodization(sz; kwargs...)\n\nCreate a N-dimensionnal apodization function ApodizationFunctions.TriangApodization, with  size sz defined as a single Int (1-dimensionnal) or a tuple of Int.\n\nFor kwargs definitions see triang function in package  DSP.jl.\n\nExample\n\njulia> apod = ApodizationFunctions.TriangApodization((4, 4, 4));\n\njulia> A = rand(4, 4, 4);\n\njulia> apod(A)\n4×4×4 Array{Float64, 3}:\n...\n\n\n\n\n\n","category":"type"},{"location":"#ApodizationFunctions.TukeyApodization","page":"Home","title":"ApodizationFunctions.TukeyApodization","text":"ApodizationFunctions.TukeyApodization(sz, par; kwargs...)\n\nCreate a a N-dimensionnal apodization function ApodizationFunctions.TukeyApodization, with size sz defined as a single Int (1-dimensionnal) or a tuple of Int.\n\nFor par and kwargs definitions see tukey function in package  DSP.jl.\n\nExample\n\njulia> apod = ApodizationFunctions.TukeyApodization((4, 4, 4), 0.5);\n\njulia> A = rand(4, 4, 4);\n\njulia> apod(A)\n4×4×4 Array{Float64, 3}:\n...\n\n\n\n\n\n","category":"type"}]
}
