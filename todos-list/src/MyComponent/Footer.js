
const Footer = () => {
  let footerStyle = {
    
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "40px",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
    lineHeight: "10px",
    zIndex: "1000",
   
      
    
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className="text-center ">
        Copyright &copy; Mrunmayi Joshi
      </p>
      
    </footer>
  )
}

export default Footer
