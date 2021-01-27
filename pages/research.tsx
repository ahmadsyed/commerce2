import { Layout } from '@components/common'
import { Text } from '@components/ui'
import {request} from '../lib/datocms';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

export async function getStaticProps(context){
  const graphqlRequest = {
    query: '{ research{ id,research,researchText, researchImage{url}} }'
  };
  return {
    props: { data: await request(graphqlRequest) },
  }
}

export default function Research(data) {
  const researchData = data.data.research;

  return (
    <Container>
      
        <h1 className="display-4">{researchData.research}</h1>
      <div style={{backgroundImage: `url(${researchData.researchImage.url})`,height: '455px',backgroundRepeat: 'no-repeat',width: '85%'}}>
      <Text variant="pageHeading" style={{textAlign:'center'}}>{researchData.research}</Text>
      {data && (
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-8 pr-4">
            <div style={{paddingLeft: '382px'}}>
              <span >
                {researchData.researchText}
              </span>
            </div>
            
          </div>
        </div>
      )}
      </div>
       
    </Container>
  )
}





Research.Layout = Layout
