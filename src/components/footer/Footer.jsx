import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div id='contactUs' >
      <div style={{textAlign: "center", color: "white"}}>
        <a className="GENERAL" href="https://apoyofinanciero.uniandes.edu.co" target="_blank"  rel="noreferrer" >Apoyo Financiero</a> |
        <a className="GENERAL" href="https://registro.uniandes.edu.co" target="_blank" rel="noreferrer">Adminisiones y Registro</a> |
        <a className="GENERAL" href="https://biblioteca.uniandes.edu.co" target="_blank" rel="noreferrer">Biblioteca</a> |
        <a className="GENERAL" href="https://bloqueneon.uniandes.edu.co" target="_blank" rel="noreferrer">Bloque Neon</a> |
        <a className="GENERAL" href="http://agenda.uniandes.edu.co" target="_blank" rel="noreferrer">Agenda y Eventos</a> |
        <a className="GENERAL" href="https://decanaturadeestudiantes.uniandes.edu.co" target="_blank" rel="noreferrer">Decanatura de Estudiantes </a>
        <br /> Universidad de los Andes | Vigilada Mineducación
        <br /> Reconocimiento como Universidad: Decreto 1297 del 30 de mayo de 1964.
        <br /> Reconocimiento personería jurídica: Resolución 28 del 23 de febrero de 1949 Minjusticia
        <br /> Edificio Mario Laserna Cra 1 Este No 19A - 40 Bogotá (Colombia) | Tel: [571] 3394949 Ext: 2860, 2861, 2862 | Fax: [571] 3324325
        <br /> © 2019 - <a class="GENERAL" href="/">Departamento de Ingeniería de Sistemas y Computación</a>
      </div>
    </div>
  )
}

export default Footer