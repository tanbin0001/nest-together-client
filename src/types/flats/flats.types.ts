export interface Flat {
    id: string
    squareFeet: number
    imageLink: string
    totalBedrooms: number
    totalRooms: number
    utilitiesDescription: string
    location: string
    description: string
    rent: number
    availability: boolean
    advanceAmount: number
    createdAt: string
    updatedAt: string
    postedBy: string
    user: User
  }
  
  export interface User {
    id: string
    name: string
  }
  