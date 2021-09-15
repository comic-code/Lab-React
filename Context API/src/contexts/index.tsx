import { AuthProvider } from "./auth"

interface Props {
  children?: React.ReactNode
}

export default function ContextProvider({children}: Props) {
  // Dessa forma separamos os providers do contexto dos providers de outras ferramentas.
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}