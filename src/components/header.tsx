"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Target } from "lucide-react"
import { useState } from "react"
import { AuthModal } from "@/components/auth-modal"

export function Header() {
    const [showSignIn, setShowSignIn] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                                <Target className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                Radianite<span className="text-primary">.gg</span>
              </span>
                        </Link>

                        <div className="flex items-center gap-3">
                            <Button variant="ghost" size="sm" onClick={() => setShowSignIn(true)} className="font-semibold">
                                Sign In
                            </Button>
                            <Button size="sm" onClick={() => setShowSignUp(true)} className="font-semibold">
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <AuthModal open={showSignIn} onOpenChange={setShowSignIn} mode="signin" />
            <AuthModal open={showSignUp} onOpenChange={setShowSignUp} mode="signup" />
        </>
    )
}
