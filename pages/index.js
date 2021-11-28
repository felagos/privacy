import { Layout, Collapse } from 'antd'
import Head from 'next/head'

import styles from '../styles/App.module.css'

const { Header, Content } = Layout
const { Panel } = Collapse

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Privacy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header className={styles.header}>
        <span>Privacidad</span>
      </Header>
      <Content>
        <Collapse defaultActiveKey={['1', '2', '3']} className>
          <Panel header="Política de Privacidad" key="1" className={styles.panel_header}>
            <p>El presente Política de Privacidad establece los términos en que usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Los desarrolladores estan comprometidos con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento.</p>
          </Panel>
          <Panel header="Información que es recogida" key="2" className={styles.panel_header}>
            <p>Nuestro sitio web podrá recoger información personal por ejemplo: Nombre, información de contacto como su dirección de correo electrónica.
            </p>
          </Panel>
          <Panel header="Uso de la información recogida" key="3" className={styles.panel_header}>
            <p>La aplicación hara uso de los datos de nombre y correo electrónico solo para autenticar e identificar al usuario dentro de la aplicación, además de asociar los registros de operación con su usuario.</p>
          </Panel>
        </Collapse>
      </Content>
    </Layout>
  )

}
