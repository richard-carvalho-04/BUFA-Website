import { Router } from "express"
import { contact } from "../controller/contact.controller.js"


const router = Router()

router.post('/contact', contact)

export default router