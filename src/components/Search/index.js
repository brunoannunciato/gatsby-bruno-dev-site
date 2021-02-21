import React from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';

import Hit from './Hit'


const algolia = {
    appID: process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}
const searchClient = algoliasearch(algolia.appID, algolia.searchOnlyKey)

const Search = ({ handleIsSearching, isSearching }) => (
    <InstantSearch searchClient={searchClient} indexName={ algolia.indexName }>
        <SearchBox translations={{ placeholder: 'Pesquisar...' }} onChange={(event) => handleIsSearching(event.target.value)}/>
        {
            isSearching &&
            <>
                <Stats translations={{
                    stats(nbHits, timeSpentMs) {
                        return `${nbHits} resultados encontrados em ${timeSpentMs} ms`
                    }
                }}/>
                <Hits hitComponent={ Hit }/>
            </>
        }
    </InstantSearch>
)

export default Search