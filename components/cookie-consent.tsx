"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Cookie, Settings } from "lucide-react"
import { useAppStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function CookieConsent() {
  const { cookieConsent, setCookieConsent } = useAppStore()
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    // Check if consent has been given
    if (cookieConsent === null) {
      setShowBanner(true)
    }
  }, [cookieConsent])

  const handleAcceptAll = () => {
    setCookieConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    })
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    setCookieConsent({
      necessary: true, // Necessary cookies are always required
      analytics: false,
      marketing: false,
      functional: false,
    })
    setShowBanner(false)
  }

  const handleSavePreferences = (preferences: typeof cookieConsent) => {
    setCookieConsent(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  if (!showBanner) return null

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 bg-white border-t border-gray-200 shadow-2xl"
          >
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <Cookie className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Cookie Preferences
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                    By clicking "Accept All", you consent to our use of cookies. You can manage your preferences at any time.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      onClick={handleAcceptAll}
                      className="bg-primary text-white hover:bg-primary/90"
                    >
                      Accept All
                    </Button>
                    <Button
                      onClick={handleRejectAll}
                      variant="outline"
                      className="border-gray-300"
                    >
                      Reject All
                    </Button>
                    <Button
                      onClick={() => setShowSettings(true)}
                      variant="outline"
                      className="border-gray-300"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Customize
                    </Button>
                    <a
                      href="/privacy-policy"
                      className="text-sm text-primary hover:underline self-center sm:self-auto"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => setShowBanner(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Manage your cookie preferences. You can enable or disable different types of cookies below.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="necessary" className="text-base font-semibold">
                  Necessary Cookies
                </Label>
                <p className="text-sm text-muted-foreground">
                  Required for the website to function properly. These cannot be disabled.
                </p>
              </div>
              <Switch id="necessary" checked={true} disabled />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="analytics" className="text-base font-semibold">
                  Analytics Cookies
                </Label>
                <p className="text-sm text-muted-foreground">
                  Help us understand how visitors interact with our website.
                </p>
              </div>
              <Switch
                id="analytics"
                checked={cookieConsent?.analytics ?? false}
                onCheckedChange={(checked) =>
                  handleSavePreferences({
                    ...cookieConsent!,
                    analytics: checked,
                  })
                }
              />
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="marketing" className="text-base font-semibold">
                  Marketing Cookies
                </Label>
                <p className="text-sm text-muted-foreground">
                  Used to deliver personalized advertisements and track campaign performance.
                </p>
              </div>
              <Switch
                id="marketing"
                checked={cookieConsent?.marketing ?? false}
                onCheckedChange={(checked) =>
                  handleSavePreferences({
                    ...cookieConsent!,
                    marketing: checked,
                  })
                }
              />
            </div>

            {/* Functional Cookies */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="functional" className="text-base font-semibold">
                  Functional Cookies
                </Label>
                <p className="text-sm text-muted-foreground">
                  Enable enhanced functionality and personalization.
                </p>
              </div>
              <Switch
                id="functional"
                checked={cookieConsent?.functional ?? false}
                onCheckedChange={(checked) =>
                  handleSavePreferences({
                    ...cookieConsent!,
                    functional: checked,
                  })
                }
              />
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={() => setShowSettings(false)}>
              Cancel
            </Button>
            <Button
              onClick={() =>
                handleSavePreferences(cookieConsent || {
                  necessary: true,
                  analytics: false,
                  marketing: false,
                  functional: false,
                })
              }
            >
              Save Preferences
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
