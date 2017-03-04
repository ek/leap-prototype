module.exports = {
  key: '123',
  podcast: 'The Daily',
  title: 'Sample Podcast',
  description: 'President Trump\'s sprawling surprise news conference and the view from Russia. Guests: Jim Rutenberg, the media columnist for the New York Times.',
  image: 'img/the-daily.jpg',
  published: new Date('2017-01-15'),
  vocabLevel: 2,
  pace: 'rapid',
  duration: 8,
  accent: 'American',
  visible: false,
  transcript: [
    {
      text: `I turn on the TV, open the newspapers and I see stories of chaos," President Trump said at his hastily organized news conference on Thursday.`,
      start: "00:00:00.050",
      visible: false,
      sections: [
        {
          text: `"I turn on the TV,`,
          start: "00:00:00.050",
          visible: false,
          items: ['i', 'turn-on', 'tv']
        },
        {
          text: `open the newspapers`,
          start: "00:00:00.200",
          visible: false,
          items: ['open', 'newspapers']
        },
        {
          text: `and I see stories of chaos,`,
          start: "00:00:00.231",
          visible: false,
          items: ['i', 'stories', 'chaos']
        },
        {
          text: `President Trump said`,
          start: "00:00:00.500",
          visible: false,
          items: ['president']
        },
        {
          text: `at his hastily organized`,
          start: "00:00:00.900",
          visible: false,
          items: ['hastily', 'organized']
        }
      ]
    },
    {
      text: `"Yet it is the exact opposite. This administration is running like a fine-tuned machine."`,
      start: "00:00:01.000",
      visible: false,
      sections: [ ]// Same pattern as above
    }
  ]
};
