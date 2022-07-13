module ApodizationFunctions

using DSP

export apodfunc,
    RectApodization,
    HanningApodization,
    HammingApodization,
    CosineApodization,
    LanczosApodization,
    TriangApodization,
    BartlettApodization,
    BartlettHannApodization,
    BlackmanApodization,
    TukeyApodization,
    GaussianApodization,
    KaiserApodization

abstract type AbstractApodizationFunction end

weights(apod::AbstractApodizationFunction) = apod.weights

Base.size(apod::AbstractApodizationFunction) = size(weights(apod))

apodfunc(a::Symbol, sz; kwargs...) = apodfunc(Val{a}(), sz; kwargs...) # Val{a}() causes type unstability

apodfunc(a::Symbol, sz, par; kwargs...) = apodfunc(Val{a}(), sz, par; kwargs...)

for func in (:rect, :hanning, :hamming, :cosine, :lanczos, :triang, :bartlett, :bartlett_hann, :blackman)
    st = string(func)
    uf = uppercasefirst.(split(st, "_"))
    sname = Symbol(*(uf..., "Apodization"))
    @eval begin
        """
            $(string($sname))(sz; kwargs...)
        Create a N-dimensionnal apodization function `$(string($sname))`, with 
        size `sz` defined as a single `Int` (1-dimensionnal) or a tuple of `Int`.

        For `kwargs` definitions see `$($st)` function in package 
        `DSP.jl`.

        # Example

        ```julia
        julia> apod = $(string($sname))((4, 4, 4));

        julia> A = rand(4, 4, 4);
        
        julia> apod(A)
        4×4×4 Array{Float64, 3}:
        ...
        ```
        """
        struct $sname{N, T<:Real} <: AbstractApodizationFunction
            weights::Array{T, N}
        end

        $sname(n::Int; kwargs...) = $sname(DSP.$func(n; kwargs...))

        $sname(sz::NTuple{2, Int}; kwargs...) = $sname(DSP.$func(sz; kwargs...))

        function $sname(sz::NTuple{N, Int}; kwargs...) where {N}
            # weights for the first dimensions
            wfd = weights($sname(sz[1:N - 1]; kwargs...))
            # weights for the last dimension
            wld = weights($sname(sz[end]; kwargs...))
            w = zeros(size(wfd)..., size(wld)...)
            for i in 1:sz[end]
                v = selectdim(w, N, i)
                @inbounds @. v = wfd * wld[i]
            end
            $sname(w)
        end

        (apod::$sname)(A) = weights(apod) .* A

        apodfunc(::Val{Symbol($st)}, sz; kwargs...) = $sname(sz; kwargs...)
    end
end

for func in (:tukey, :gaussian, :kaiser)
    st = string(func)
    sname = Symbol("$(uppercasefirst(string(func)))Apodization")
    @eval begin
        """
            $(string($sname))(sz, par; kwargs...)
        Create a a N-dimensionnal apodization function `$(string($sname))`, with
        size `sz` defined as a single `Int` (1-dimensionnal) or a tuple of `Int`.

        For `par` and `kwargs` definitions see `$($st)` function in package 
        `DSP.jl`.

        # Example

        ```julia
        julia> apod = $(string($sname))((4, 4, 4), 0.5);

        julia> A = rand(4, 4, 4);
        
        julia> apod(A)
        4×4×4 Array{Float64, 3}:
        ...
        ```
        """
        struct $sname{N, T<:Real} <: AbstractApodizationFunction
            weights::Array{T, N}
        end

        $sname(n::Int, par; kwargs...) = $sname(DSP.$func(n, par; kwargs...))

        $sname(sz::NTuple{2, Int}, par; kwargs...) = $sname(DSP.$func(sz, par; kwargs...))

        function $sname(sz::NTuple{N, Int}, par; kwargs...) where {N}
            # weights for the first dimensions
            wfd = weights($sname(sz[1:N - 1], par; kwargs...))
            # weights for the last dimension
            wld = weights($sname(sz[end], par; kwargs...))
            w = zeros(size(wfd)..., size(wld)...)
            for i in 1:sz[end]
                v = selectdim(w, N, i)
                @inbounds @. v = wfd * wld[i]
            end
            $sname(w)
        end

        (apod::$sname)(A) = weights(apod) .* A

        apodfunc(::Val{Symbol($st)}, sz, par; kwargs...) = $sname(sz, par; kwargs...)
    end
end

end
