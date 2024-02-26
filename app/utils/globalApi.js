import { request, gql } from 'graphql-request';

const master_url =
 'https://api-eu-west-2.hygraph.com/v2/clsxa6dl00myu07unu0cranri/master';

const getSlider = async () => {
 const query = gql`
  query GetSlider {
   sliders {
    id
    name
    image {
     url
    }
   }
  }
 `;
 const res = await request(master_url, query);

 return res;
};

const getCategories = async () => {
 const query = gql`
  query GetCategories {
   categories {
    id
    name
    icon {
     url
    }
   }
  }
 `;
 const res = await request(master_url, query);

 return res;
};

const getBusinessLists = async () => {
    const query = gql`
    query getBusinessLists {
        businessLists {
          email
          id
          images {

            
            url
          }
          name
          contactPeson
          about
          address
          categories {
            name
          }
        }
      }
      
    `;
    const res = await request(master_url, query);
   
    return res;
   };

   const getBusinessListsByCategoryName = async (name) => {
    const query = gql`
    query getBusinessListsByCategoryName {
        businessLists(where: {categories_some: {name: "`+name+`"}}) {
          about
          address
          categories {
            name
          }
          email
          id
          images {
            url
          }
          name
        }
      }
    `;
    const res = await request(master_url, query);
   
    return res;
   };
   
export default {
 getSlider,
 getCategories,
    getBusinessLists,
    getBusinessListsByCategoryName
};
