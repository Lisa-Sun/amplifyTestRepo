/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($email: String!) {
    getCustomer(email: $email) {
      email
      username
      createdAt
      updatedAt
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $email: String
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCustomers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($orderId: ID!, $status: Status!, $createdAt: AWSDateTime!) {
    getItem(orderId: $orderId, status: $status, createdAt: $createdAt) {
      orderId
      status
      createdAt
      name
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $orderId: ID
    $statusCreatedAt: ModelItemPrimaryCompositeKeyConditionInput
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listItems(
      orderId: $orderId
      statusCreatedAt: $statusCreatedAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        orderId
        status
        createdAt
        name
        updatedAt
      }
      nextToken
    }
  }
`;
export const itemsByStatusAndCreatedAt = /* GraphQL */ `
  query ItemsByStatusAndCreatedAt(
    $status: Status
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemsByStatusAndCreatedAt(
      status: $status
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        orderId
        status
        createdAt
        name
        updatedAt
      }
      nextToken
    }
  }
`;
