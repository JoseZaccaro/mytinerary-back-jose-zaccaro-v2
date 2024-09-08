import bcrypt from 'bcryptjs'

function verifyPassword(req: any, res: any, next: any) {
    if (!req.body.exists) {
        return res.status(400).json({ error: "email or password is incorrect." })
    }

    const { password, encryptedPassword } = req.body

    let isPasswordCorrect = bcrypt.compareSync(password, encryptedPassword)
    
    if(!isPasswordCorrect){
        return res.status(400).json({ error: "email or password is incorrect." })
    }
    
    next()
}

export { verifyPassword }