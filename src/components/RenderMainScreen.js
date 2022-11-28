import Navbar from './Navbar';
import Title from './Title';
export default function RenderMainScreen(children) {
  return (
    <>
      <Title
        title='Box-Office'
        subtitle='Know more about your favorite Actress Or Show'
      />

      <Navbar />
      {children}
    </>
  );
}
