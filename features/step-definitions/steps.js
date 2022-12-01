const { Given, When, Then } = require('@wdio/cucumber-framework');


Given(/^on the home page$/, async () => {
    await browser.url(`https://www.newegg.com/`);
});

Given(/^I refresh page$/, async () => {
    await browser.refresh();
});

When(/^I search the word (\w+)$/, async (item) => {
    const search = await $('input[type=search]');
    await search.setValue(item);
    const search_button = await $('//button[contains(.,"Search")]');
    await search_button.click();
});

Then(/^I check that at least one item appears$/, async () => {
    const list = await $('#app');
    await expect(list).not.toHaveTextContaining('We have found 0 items that match');
    await expect(list).toHaveTextContaining('You May Also Be Interested');
});

When(/^I open tab (.*)$/, async (tab) => {
    const new_tab = await $('#trendingBanner_720202 > span');
    await new_tab.click();
});

When(/^I click on the Internet shop logo$/, async () => {
    const logo = await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo > a > img');
    await logo.click();
});

Then(/^I check that the main page opened$/, async () => {
    await browser.url('https://www.newegg.com/');
    await expect(browser).toHaveUrl('https://www.newegg.com/');
});

