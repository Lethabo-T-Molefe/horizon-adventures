import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import Cookies from 'js-cookie'

// User preferences store
interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  language: string
  currency: string
}

interface AppState {
  // User preferences
  preferences: UserPreferences
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  setLanguage: (language: string) => void
  setCurrency: (currency: string) => void
  
  // Cookie consent
  cookieConsent: {
    necessary: boolean
    analytics: boolean
    marketing: boolean
    functional: boolean
  } | null
  setCookieConsent: (consent: AppState['cookieConsent']) => void
  
  // UI state
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
  
  // Loading states
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  
  // Form data (for contact forms, etc.)
  formData: Record<string, any>
  setFormData: (key: string, value: any) => void
  clearFormData: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial preferences
      preferences: {
        theme: 'system',
        language: 'en-ZA',
        currency: 'ZAR',
      },
      
      setTheme: (theme) =>
        set((state) => ({
          preferences: { ...state.preferences, theme },
        })),
      
      setLanguage: (language) =>
        set((state) => ({
          preferences: { ...state.preferences, language },
        })),
      
      setCurrency: (currency) =>
        set((state) => ({
          preferences: { ...state.preferences, currency },
        })),
      
      // Cookie consent
      cookieConsent: null,
      setCookieConsent: (consent) => {
        set({ cookieConsent: consent })
        if (consent) {
          Cookies.set('cookie-consent', JSON.stringify(consent), {
            expires: 365,
            sameSite: 'strict',
          })
        }
      },
      
      // UI state
      isMenuOpen: false,
      setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
      
      // Loading states
      isLoading: false,
      setIsLoading: (isLoading) => set({ isLoading }),
      
      // Form data
      formData: {},
      setFormData: (key, value) =>
        set((state) => ({
          formData: { ...state.formData, [key]: value },
        })),
      clearFormData: () => set({ formData: {} }),
    }),
    {
      name: 'horizon-adventures-store',
      storage: createJSONStorage(() => {
        // Use localStorage for client-side, fallback to memory
        if (typeof window !== 'undefined') {
          return {
            getItem: (name: string) => localStorage.getItem(name),
            setItem: (name: string, value: string) => localStorage.setItem(name, value),
            removeItem: (name: string) => localStorage.removeItem(name),
          }
        }
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        }
      }),
      partialize: (state) => ({
        preferences: state.preferences,
        cookieConsent: state.cookieConsent,
      }),
    }
  )
)
