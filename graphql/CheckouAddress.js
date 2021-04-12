import gql from "graphql-tag";

export const CHECKOUT_ADDRESS = gql`
  mutation CHECKOUT_ADDRESS(
    $fullname: String
    $address: String
    $city: String
    $province: String
    $country: String
    $contact: String
    $postcode: Int
  ) {
    createCheckout(
      fullname: $fullname
      address: $address
      city: $city
      province: $province
      country: $country
      contact: $contact
      postcode: $postcode
    ) {
      id
      fullname
      address
      city
      province
      country
      contact
      postcode
    }
  }
`;


export const MY_CHECKOUT_ADDRESS = gql`
  query MY_CHECKOUT_ADDRESS {
    user{
      id
      checkout{
        id
        fullname
        address
        city
        province
        country
        contact
        postcode
      }
    }
  }
`;