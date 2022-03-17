import { gql } from "@apollo/client";

export const ANIME_LIST = gql`
  query ($id: Int, $page: Int, $perPage: Int, $search: String, $sort: [MediaSort]) {
    Page(page: $page, perPage: $perPage) {
      media(id: $id, search: $search, sort: $sort) {
        id
        title {
          romaji
          english
        }
        coverImage {
          large
        }
      }
    }
  }
`;

export const ANIME_DETAIL = gql`
  query($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
      }
      coverImage {
        large
      }
      genres
      duration
      favourites
      description
      averageScore
      status
      bannerImage
    }
  }
`;
