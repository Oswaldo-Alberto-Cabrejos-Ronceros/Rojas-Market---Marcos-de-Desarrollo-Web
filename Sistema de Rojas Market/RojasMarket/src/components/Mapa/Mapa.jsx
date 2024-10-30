import React from 'react'

function Mapa() {
  return (
    <div style={{ width: '100%', height: '100%', display:'flex', alignItems:'CgEnter', justifyContent:'center' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15480.141004632373!2d-75.74318468570708!3d-14.075095753129467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e29a838b78ff%3A0x2dbdf707c2990a8b!2sSupermercados%20Rojas!5e0!3m2!1ses-419!2spe!4v1727755364714!5m2!1ses-419!2spe"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa de Supermercado Rojas"
    ></iframe>
  </div>
  )
}

export default Mapa