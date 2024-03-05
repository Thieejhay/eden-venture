const[currentSlide, setCurrentSlide] = useState(0);
  const[active, setActive] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if(currentSlide===4){
        setCurrentSlide(0)
      }else{
        setCurrentSlide(currentSlide+1)
      }
    },4000)
    return () => clearTimeout(timer)
  }, [currentSlide])

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentSlide].url})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    transition: 'background 0.3s ease-in',
  }
  const goToNext = (currentSlide)=>{
    setCurrentSlide(currentSlide)
  }
  const activate = (currentSlide) => {
    setActive(currentSlide)
  }



  {
    imageSlide.map((imageSlide, currentSlide)=>(
      <span key={currentSlide} onClick={event =>{goToNext(currentSlide); activate(currentSlide);}} className={`w-3 h-3 bg-[#6100c1] ml-3 cursor-pointer ${active === currentSlide && "bg-white"}`}></span>
    ))
  }