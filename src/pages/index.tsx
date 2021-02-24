import { ExperienceBar } from '../components/ExpirienceBar'
import { Profile } from '../components/Profile'
import Text from '../components/Text'
import styles from "../styles/pages/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
    
      <ExperienceBar/>

      <section>
        <div>
          <Profile/>
        </div>
        <div></div>
      </section>

      <Text msg="texto 1">
        Copa do Brasil
      </Text>
      <Text msg="texto 2">
        Paulistao
      </Text>
      <Text msg="texto 3">
        Libertadores
      </Text>
 
     </div>
  )
}
