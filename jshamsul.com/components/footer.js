import Container from './container'

export default function Footer() {
  const bgImg = {
    backgroundImage: `url("/assets/diagonal-stripes.svg")`,
  };

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col">
          <div className="w-full h-24" style={ bgImg } />
          <div className="text-xs mt-6">
            Copyright &copy; 2010 - 2020 jShamsul.com. All Rights Reserved.
          </div>
        </div>
      </Container>
    </footer>
  )
}
