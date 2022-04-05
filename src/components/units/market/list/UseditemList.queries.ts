import { gql } from '@apollo/client'

export const FETCH_ALL_PRODUCT = gql`
  query fetchAllProduct {
    fetchAllProduct {
      product_id
      name
      price
      urls
      brand {
        name
      }
      subCategory {
        name
        mainCategory {
          name
        }
      }
    }
  }
`
export const FETCH_PRODUCT_BY_SEARCH = gql`
  query fetchProductBySearch($name: String!) {
    fetchProductBySearch(name: $name) {
      name
      product_id
      description
      price
      view
      like
      urls
      brand {
        brand_id
        name
      }
    }
  }
`
