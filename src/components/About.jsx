const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1e2124] text-blue-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#000000]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold text-white-300'>
            <p>Hi. I'm Owen, I am 22 years old and just got my certificate from my coding bootcamp.</p>
          </div>
          <div className='text-white-500'>
            {/* I need to update this */}
            <p>
              I'm passionate about building scalable products that will be bring convenience to the customer and more sales to the business. I specialize in building software products and datamanagement. 
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
