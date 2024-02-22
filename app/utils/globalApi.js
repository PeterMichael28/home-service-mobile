import { request, gql } from 'graphql-request'

const master_url = "https://api-eu-west-2.hygraph.com/v2/clsxa6dl00myu07unu0cranri/master"


const getSlider = async () => {

    const query = gql`
    query GetSlider{
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
    `
  const res=   await request(master_url, query)

  return res
}


export default {
    getSlider
}