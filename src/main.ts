import { CheerioCrawler, Dataset } from 'crawlee';

const crawler = new CheerioCrawler({
    async requestHandler({ $, request, enqueueLinks }) {
        const title = $('header.entry-header > h1').text().trim();
        const article = $('div.entry-content').text().trim();
        console.log(`Processing ${title}: ${request.url}.`);

        await enqueueLinks({
            strategy: 'same-domain',
            exclude: ['https://store.waitbutwhy.com/*']
        });

        await Dataset.pushData({ 
            url: request.url, 
            article 
        });
    }
})

// Start the crawler with the provided URLs
await crawler.run(['https://waitbutwhy.com/']);
