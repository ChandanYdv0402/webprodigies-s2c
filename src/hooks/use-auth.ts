import { useAuthActions } from '@convex-dev/auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Generate a SignInSchema
const signInSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
})

// Generate a SignUpSchema
const signUpSchema = z.object({
firstName: z.string() .min(2, 'First name must be at least 2 characters'),
lastName: z.string().min(2, 'Last name must be at least 2 characters'),
email: z.string().email('Invalid email address'),
password: z.string() .min(6, 'Password must be at least 6 characters'),
})

// Generate a SignUpData type
type signInData = z.infer<typeof signInSchema>
type signUpData = z.infer<typeof signUpSchema>

export const useAuth = () => {
    const {signIn, signOut} = useAuthActions()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const signInForm = useForm<signInData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    }) 

    const signUpForm = useForm<signUpData>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    })

    const handleSignIn = async (data: signInData) => {
        setIsLoading(true)
         try {
    await signIn("password", { 
        email: data.email,
        password: data.password,
        flow: "signIn",
    })
    // If successful, maybe redirect to home page?
    router.push('/dashboard')
    } catch (error) {
        // If failed, show an error message
        console.error(error)
        signInForm.setError('password',{
            message: 'Invalid email or password',
        })
    } finally {
        setIsLoading(false) // Stop loading (whether it worked or failed)
    }

    const handleSignUp = async (data: signUpData) => {
        setIsLoading(true)
        try {
            await signIn("password", { 
                email: data.email,
                password: data.password,
                flow: "signUp",
            })
            // If successful, maybe redirect to home page?
            router.push('/dashboard')
            } catch (error) {
                // If failed, show an error message
                console.error(error)
                signInForm.setError('password',{ 
                    message: 'Invalid email or password',
                })
            } finally {
                setIsLoading(false) // Stop loading (whether it worked or failed)
            }
    }

    const handlesignout = async () => {
        setIsLoading(true)
        await signOut()
        setIsLoading(false)
    }

    return{
        signInForm,
        signUpForm,
        handleSignIn,
        handleSignUp,
        handlesignout,
        isLoading,
    }
}
}
