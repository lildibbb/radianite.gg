"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"
import { AuthModal } from "@/components/auth-modal"

export function Hero() {
    const [showSignUp, setShowSignUp] = useState(false)

    return (
        <>
            <section className="relative overflow-hidden pt-32 pb-20">
                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
                </div>

                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                            <Sparkles className="h-4 w-4" />
                            Track Your Valorant Store Daily
                        </div>

                        <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                            Never Miss Your
                            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Dream Skin Again
              </span>
                        </h1>

                        <p className="mb-10 text-pretty text-lg text-muted-foreground md:text-xl">
                            Get instant notifications when your favorite Valorant skins appear in the daily store. Track prices, view
                            collections, and never miss a limited-time offer.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button size="lg" className="group font-semibold" onClick={() => setShowSignUp(true)}>
                                Start Tracking Now
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button size="lg" variant="outline" className="font-semibold bg-transparent">
                                View Demo
                            </Button>
                        </div>

                        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">50K+</div>
                                <div className="text-sm text-muted-foreground">Active Users</div>
                            </div>
                            <div>
                                <div className="mb-2 text-3xl font-bold text-accent md:text-4xl">1M+</div>
                                <div className="text-sm text-muted-foreground">Skins Tracked</div>
                            </div>
                            <div>
                                <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">24/7</div>
                                <div className="text-sm text-muted-foreground">Store Updates</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AuthModal open={showSignUp} onOpenChange={setShowSignUp} mode="signup" />
        </>
    )
}
