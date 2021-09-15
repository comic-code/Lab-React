import { createContext } from "react";

interface Props {
  children?: React.ReactNode
}

// Para TS é necessário dizer os tipos dos valores e definir um initial state .
interface AuthContextData {
   signed: boolean
}

const initialContext = {
  signed: false
}

const AuthContext = createContext<AuthContextData>(initialContext);

function AuthProvider({ children }: Props) {

  return (
    <AuthContext.Provider value={{ signed: true }}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider };  