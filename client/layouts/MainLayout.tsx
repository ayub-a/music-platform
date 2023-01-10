import { Container } from '@mui/material'
import Navbar from '../components/Navbar'

type MainLayoutProps = {
  children?: JSX.Element
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: '90px' }}>{children}</Container>
    </div>
  )
}

export default MainLayout
