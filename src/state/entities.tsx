export interface Post {
    _id: string
    isDiscussion: boolean
    publicationAuthor: string
    publicationTitle: string
    publicationDescription: string
    publicationDate: Date
    publicationScore: string[]
    isAnonymous: boolean
    reports: string[]
}

export interface Comment {
    _id: string
    idParent: string
    commentAuthor: string
    commentDescription: string
    commentDate: Date
    commentScore: string[]
    category: string
    isAnonymous: boolean
    reports: string[]
    respondTo?: number
}

export interface User {
    _id: string
    userName: string
    userFirstName: string
    userPseudo: string
    userMail: string
    userPassword: string
    isAdmin: boolean
    isPrivate: boolean
    isBan: boolean
}

export interface category {
    _id: string,
    categoryName: string
}
