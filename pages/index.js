//import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import {skills,experiences,projects} from '../profile'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      {/* header card*/}
      <header className='row'>
        <div className='col-md-12'>
          <div className='card card-body bg-secondary text-light'>
            <div className='row'>
              <div className='col-md-4' style={{height: '100px'}}>
                <Image src='/Pimentel-photo1.jpg' width={250} height={300} alt='No img' />
              </div>
              <div className='col-md-8'>
                <h1>Cristian Pimentel</h1>
                <h3>FullStack Developer</h3>
                <h5>About me:</h5>
                <p>Hola! soy Cristian, soy un desarrollador web graduado de el Bootcamp de {`&quot;`}Soy Henry{`&quot;`} </p>
                <p>Mi objetivo es obtener experiencia en el mundo de la programacion y perfeccionar mis habilidades</p>
                <p>Me considero una persona con un buen manejo de la lógica de programación, autodidacta y con una gran predisposición al trabajo en equipo</p>
                <a href=''>Hire me</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Second section */}
      <div className='row py-2'>
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <h1>skills</h1>
              {skills.map(({skill,percentege},i)=>(
                <div className="py-2" key={i}>

                  <h5>{skill}</h5>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width:`${percentege}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Experience</h1>

                <ul>
                  {experiences.map(({title,from,to,description},index)=>(
                    <li key={index}>
                      <h3>{title}</h3>
                      <h5>{from}-{to}</h5>
                      <p>{description}</p>
                      </li>
                  ))}
                </ul>
                <Link href='/experiences' className='btn btn-dark'>See more...</Link>
            </div>
          </div>
        </div>
      </div>
      {/*Portfolio*/}
      <div className="row"><div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className='text-center text-light'>Proyects</h1>
              </div>
              {projects.map(({name,description,image},i)=>(
                <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={`/${image}`} alt="No se encontro" className='card-img-top'/>
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <Link href='$'>Know more</Link>
                  </div>
                </div>
              </div>
              ))}
              </div>              
                <div className="text-center mt-4">
                  <Link href='/portfolio' className='btn btn-outline-light'>All Proyects</Link>

                
              </div>
              </div>
              </div></div>
    </Layout>
  )
}
