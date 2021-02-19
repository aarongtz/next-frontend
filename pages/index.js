import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ContactForm from '../components/ContactForm';



import { useRouter } from 'next/router'
//import { useState } from 'react'

/*const preventDefault = f => e => {
   e.preventDefault()
   f(e)
}*/

export default function Home() {

   /*const router = useRouter()
   const [nameContact, setQuery] = useState('')

   const handleParam = setValue => e => setValue(e.target.value)

   const sendContact = (event) => {
      var url = 'http://localhost:8000/send-contact';
      event.preventDefault();
      

      console.log(nameContact);

      router.push({
         pathname: url,
         query: { nameContact: nameContact },
      })
   }*/

   return (
      <div className={styles.container}>
         <Head>
            <title>Contact Form</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={styles.main}>
            <ContactForm />
         </main>
      </div>
   )
}
