export {}

declare global {
    namespace NodeJS {
        interface Array {
            taille() : number
        }
    }
    
}
