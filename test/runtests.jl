using ApodizationFunctions
using ApodizationFunctions: weights
using DSP
using Test

@testset "ApodizationFunctions" begin
    wsz = 16

    for func in (:rect, :hanning, :hamming, :cosine, :lanczos, :triang, :bartlett, :bartlett_hann, :blackman)
        st = string(func)
        uf = uppercasefirst.(split(st, "_"))
        sname = Symbol(*(uf..., "Apodization"))
        @eval begin
            # Uni-dimensionnal tests
            apod = $sname($wsz)
            @test all(weights(apod) .== DSP.$func($wsz))
    
            # Bi-dimensionnal tests
            apod = $sname(($wsz, $wsz))
            @test all(weights(apod) .== DSP.$func(($wsz, $wsz)))
    
            # Tri-dimensionnal tests
            A = rand($wsz, $wsz, $wsz)
            res = similar(A)
            w = DSP.$func($wsz)
            for k in 1:$wsz, j in 1:$wsz, i in 1:$wsz
                res[i, j, k] = A[i, j, k] * w[i] * w[j] * w[k]
            end
            apod = $sname(($wsz, $wsz, $wsz))
            @test all(apod(A) .≈ res)

            # Test dispatch on apodfunc
            @test all(weights(apodfunc(Symbol($st), ($wsz, $wsz, $wsz))) .== weights(apod))
        end
    end
    
    par = 0.5
    for func in (:tukey, :gaussian, :kaiser)
        st = string(func)
        sname = Symbol("$(uppercasefirst(string(func)))Apodization")
        @eval begin
            # Uni-dimensionnal tests
            apod = $sname($wsz, $par)
            @test all(weights(apod) .== DSP.$func($wsz, $par))
    
            # Bi-dimensionnal tests
            apod = $sname(($wsz, $wsz), $par)
            @test all(weights(apod) .== DSP.$func(($wsz, $wsz), $par))
    
            # Tri-dimensionnal tests
            A = rand($wsz, $wsz, $wsz)
            res = similar(A)
            w = DSP.$func($wsz, $par)
            for k in 1:$wsz, j in 1:$wsz, i in 1:$wsz
                res[i, j, k] = A[i, j, k] * w[i] * w[j] * w[k]
            end
            apod = $sname(($wsz, $wsz, $wsz), $par)
            @test all(apod(A) .≈ res)

            # Test dispatch on apodfunc
            @test all(weights(apodfunc(Symbol($st), ($wsz, $wsz, $wsz), $par)) .== weights(apod))
        end
    end
end
