import { Container } from '@mui/material'
import Navbar from '../components/Navbar'
import Player from '../components/Player'

type MainLayoutProps = {
  children?: JSX.Element | JSX.Element[]
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: '90px' }}>{children}</Container>
      <Player />
    </div>
  )
}

export default MainLayout
