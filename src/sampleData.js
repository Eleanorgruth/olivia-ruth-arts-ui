const art = [
  {
    id: 1, type: 'glass', title: 'Blue Vase', medium: 'Blown glass', date: 'Spring 2022', dimension: '8 inches tall', description: 'Using the a color overlay, and combining two shades, Olivia achieved a swirl of vibrant color in this glass vase.', url: 'https://drive.google.com/file/d/1DuczAnybuKkZFip5yQZ7jpgAy-CxTsNF/view?usp=sharing'
  },
  {
    id: 2, type: 'glass', title: 'Scrap Vase', medium: 'Blown glass', date: 'Spring 2022', dimension: '7 inches tall', description: 'After several failed attempts to work with cane, Olivia had gathered and hoarded a large amount of cane scraps, which she then reworked into this vase', url: 'https://drive.google.com/file/d/1G-N4Ub0HT2bqmTeHPNqTTZp3lJ_ToRZR/view?usp=sharing'
  },
  {
    id: 3, type: 'glass', title: 'Scrap Plate', medium: 'Blown glass', date: 'Spring 2022', dimension: '13 inch diameter', description: 'After several failed attempts to work with cane, Olivia had gathered and hoarded a large amount of cane scraps, which she then reworked into this plate', url: 'https://drive.google.com/file/d/1p1cnClQGJkKa_JIT5IhJMsxN-CsjT4Mb/view?usp=sharing'
  },
  {
    id: 4, type: 'glass', title: 'Wonky Wine Glass 1', medium: 'Blown glass', date: 'Fall 2021', dimension: '5 inches tall', description: 'The goblet is a natural goal for a young glassblower, the Wonky Wine Glass shows not only a novices aspiration for excellence, but also a child\'s goal of sophistication. It takes time to develop the skills and partnerships needed to create a great goblet, just as it takes time to develop the palette for wine.', url: 'https://drive.google.com/file/d/1mRvcXuCUAmqv5nb5vGtn4e6Eb9Hvhl4A/view?usp=sharing'
  },
  {
    id: 5, type: 'glass', title: 'Wonky Wine Glass 2', medium: 'Blown glass', date: 'Spring 2022', dimension: '4.5 inches tall', description: 'The goblet is a natural goal for a young glassblower, the Wonky Wine Glass shows not only a novices aspiration for excellence, but also a child\'s goal of sophistication. It takes time to develop the skills and partnerships needed to create a great goblet, just as it takes time to develop the palette for wine. In the second attempt, the process is more refined, yet the glass is just as juvenile.', url: 'https://drive.google.com/file/d/1tVFX87__76T6SNGR85x8oFcx6G_AXpcx/view?usp=sharing'
  },
  {
    id: 6, type: 'glass', title: 'Candy Cane Dish', medium: 'Blown glass', date: 'Spring 2022', dimension: '9 inch diameter, 5 inches tall', description: 'A bowl that did not want to be made, yet was. While making this bowl(originally intended to be a vase), Olivia dropped the object on the ground twice, and closed the hole. The best lesson to a glassblower is not being able to make something perfectly, but being able to save something after making a mistake.', url: 'https://drive.google.com/file/d/1D5qPVIfINQFysVTvOxt2MwQ2HLPA4FBW/view?usp=sharing'
  },
  {
    id: 7, type: 'glass', title: 'My Foot', medium: 'Cast glass', date: 'Spring 2022', dimension: '3 inches x 3.5 inches x 2 inches', description: 'Originally part of a Fish Out of Water Mobile or Tiktaalik, this body cast of Olivia\'s foot was made to hang along side blown fish and her friends cast feet. The project was meant to examine how humans have begun to resent evolution and examine the idea that there is no growth without change. TikTaalik was the first species of fish to begin walking on land', url: ' https://drive.google.com/file/d/1P4JUw70M9H9DKGLWE6CEk8ET3ZJ9vO0k/view?usp=sharing'
  },
  {
    id: 8, type: 'glass', title: 'Painting Glass', medium: 'Blown glass', date: 'Spring 2022', dimension: '4 inch diameter, 3.5 inches tall', description: 'Using glass frit to \'paint\' scenes onto glass was an urge Olivia had from her experience as a 2D artist.', url: 'https://drive.google.com/file/d/1oNhBrNNClqrZlec9sW9FMC2tBT911eMZ/view?usp=sharing'
  },
  {
    id: 9, type: 'glass', title: 'Butterflies', medium: 'Stained Glass', date: 'Spring 2022', dimension: '10 inches x 7 inches', description: 'An exploration into stained glass, and making stained glass patterns', url: 'https://drive.google.com/file/d/1lkNjEL6eU-rmoImxVqbRiRwdj6xEKIsu/view?usp=sharing'
  },
  {
    id: 10, type: 'glass', title: 'Dream Scape', medium: 'Cast glass', date: 'Spring 2022', dimension: '5 inches x 5 inches x 2 inches', description: 'As a meditative habit, Olivia picked up painting pages of swirling lines, shifting and pushing into each other.This object is a 3D rendition of the entrancing swirls Olivia paints.', url: 'https://drive.google.com/file/d/1Z0EmO4BkqWDLl65xjGBBb4StF6UxH7LV/view?usp=sharing'
  },
  {
    id: 11, type: 'print', title: 'Dream Scape Print', medium: 'Linoleum print', date: 'June 2022', dimension: '5 inches x 5 inches', description: 'The same swirl pattern that has become habit in Olivia\'s hand, here shown as a print.This series of prints were made from a sudden urge to create, following a printmaking class with Melanie Yazzie.', url: 'https://drive.google.com/file/d/1ya7WwiUeoYQdbn551N0iFOE-2F1607bD/view?usp=sharing'
  },
  {
    id: 12, type: 'print', title: 'Butterfly reduction print', medium: 'Linoleum reduction print', date: 'August 2022', dimension: '5 inches x 5 inches', description: 'A reintroduction to the reduction print process.', url: 'https://drive.google.com/file/d/1tELHMU0S8yfVtUzWo3X7QY4N8dzrY-Dn/view?usp=sharing'
  },
  {
    id: 13, type: 'print', title: 'English Breakfast', medium: 'Monotype gelli print', date: 'June 2022', dimension: '15 inches x 22 inches', description: 'Through a printmaking class with Melanie Yazzie, Olivia was asked to consider the symbols in her life. Tea is a necessity in her family home, and has grown into a symbol of her relationship with her family. Her father shows her mother his love by making her a cup of tea every day.', url: 'https://drive.google.com/file/d/1LMl2LVY0Wde1SwovlR0OY_Tw2mcCFwri/view?usp=sharing'
  },
  {
    id: 14, type: 'print', title: 'English Breakfast 2', medium: 'Monotype gelli print', date: 'June 2022', dimension: '11 inches x 15 inches', description: 'Through a printmaking class with Melanie Yazzie, Olivia was asked to consider the symbols in her life. The second lift of the English breakfast monotype, gives a lighter tea and a more wet tea bag look compared to the full sized print. Tea is a symbol of love in Olivia\'s family, and even before she had the taste for it she would drink black tea.', url: 'https://drive.google.com/file/d/14UqvYgDVbIkgHnSnkzh4ZCX_7GwVLKLs/view?usp=sharing'
  },
  {
    id: 15, type: 'print', title: '9569 Pine', medium: 'Monotype gelli print', date: 'June 2022', dimension: '15 inches x 22 inches', description: 'Through a printmaking class with Melanie Yazzie, Olivia was asked to consider the symbols in her life. This print is a depiction of Olivia\'s backyard including the vegetable garden and looming pikes peak. Olivia\'s mother shows her love through food, and in the summer when she can, not only does her mom cook the food but she grows it. The beet and garden have become a symbol of love and her mother.', url: 'https://drive.google.com/file/d/1LczN6MbKdna-0xG94A033CMTJo6mI_Fd/view?usp=sharing'
  },
  {
    id: 16, type: 'print', title: 'Beet', medium: 'Monotype gelli print', date: 'June 2022', dimension: '11 inches x 15 inches', description: 'Through a printmaking class with Melanie Yazzie, Olivia was asked to consider the symbols in her life. Olivia\'s mother shows her love through food, and in the summer when she can, not only does her mom cook the food but she grows it. She grows enough beets to freeze and make salads with year round. No other beets can compare to her mothers. The beet has become a symbol of love and her mother for Olivia.', url: 'https://drive.google.com/file/d/1PhtAu_nt0AE9OacLsUVDLwSIL8MWUkE_/view?usp=sharing'
  },
  {
    id: 17, type: 'print', title: 'Fish Out of Water Print', medium: 'Monotype gelli print', date: 'June 2022', dimension: '15 inches x 22 inches', description: 'Through a printmaking class with Melanie Yazzie, Olivia was asked to consider the symbols in her life. Fish out of water has always been a symbol in Olivia\'s artwork as a sense of otherness and isolation. This print is intended to be playful and resemble a poster from a childhood classroom', url: 'https://drive.google.com/file/d/1jVF-jG6f5mJA1--oUn5lUE3JD3Pj11eO/view?usp=sharing'
  },
  {
    id: 18, type: 'paintings and drawings', title: 'Chaffing', medium: 'Charcoal on paper', date: 'December 2022', dimension: '12 inches x 16 inches', description: 'This still life is meant to show an angry women searching for purpose and meaning in an oppressive world. Chaffing refers to the uncomfortable boundaries that surround her.', url: 'https://drive.google.com/file/d/1ffWF7qeLFgeFHVMzxJ_luMZ85wQ-M-nb/view?usp=share_link'
  },
  {
    id: 19, type: 'paintings and drawings', title: 'Striped Cloth', medium: 'Charcoal on paper', date: 'December 2022', dimension: '12 inches x 18 inches', description: 'A technical exercise of drawing a patterned textile and pushing tones.', url: 'https://drive.google.com/file/d/1p_zN8L9k0EbmoEvAdjbQJA_oF8Fwui8z/view?usp=share_link'
  },
  {
    id: 20, type: 'paintings and drawings', title: 'Self Portrait in Dreams', medium: 'Charcoal on paper', date: 'December 2021', dimension:'9.5 inches x 12.5 inches', description: 'Part of the formation of the fish out of water idea was a recurring dream Olivia had that her fish kept swimming out of her fish tank. The silly dream would come back to her and made her consider the foundations of what hold us back and keep us separate.', url: 'https://drive.google.com/file/d/1MC3-HH93FGwauiwlUrc3sy_y7E9G6f_E/view?usp=share_link'
  },
  {
    id: 21, type: 'paintings and drawings', title: 'Pink Swirls', medium: 'Gouache on paper', date: 'August 2021', dimension: '9 inches x 7 inches', description: 'A meditative creative outlet Olivia used to deal with anxieties of her life and anxieties of entropy.', url: 'https://drive.google.com/file/d/1HqKlpOcWSm0S_4ZTgHFvZxfEamNNCiu5/view?usp=share_link'
  },
  {
    id: 22, type: 'paintings and drawings', title: 'Yellow Swirls', medium: 'Gouache on paper', date: 'August 2021', dimension: '9 inches x 7 inches', description: 'A meditative creative outlet Olivia used to deal with anxieties of her life and anxieties of entropy.', url: 'https://drive.google.com/file/d/1h-_VJjR9Y9JvM3jWW-6RsNWZ6n7WvkRR/view?usp=share_link'
  },
  {
    id: 23, type: 'paintings and drawings', title: 'Purple Swirls', medium: 'Gouache on paper', date: 'August 2021', dimension: '9 inches x 7 inches', description: 'A meditative creative outlet Olivia used to deal with anxieties of her life and anxieties of entropy.', url: 'https://drive.google.com/file/d/1VnmH_p19EAefuvx9ClQ-jVwwrfKncDwQ/view?usp=share_link'
  },
  {
    id: 24, type: 'paintings and drawings', title: 'Fish Jesus', medium: 'Acrylic on canvas', date: 'Spring 2018', dimension: '14 x 11 inches', description: 'Fish out of water begun as literal fish in odd places or odd depictions. The replacement of Jesus with a fish is an investigation of the way iconophilia and sacredness has changes and formed the image of christ, along with and investigation of the somewhat mystical formations of christianity.', url: 'https://drive.google.com/file/d/1uuwtcQWHALTDKVBtVmi6-DaCjEOKeeg4/view?usp=share_link'
  },
  {
    id: 25, type: 'paintings and drawings', title: 'Office Fish', medium: 'Watercolor', date: 'Spring 2018', dimension: '9.5 inches x 12.5 inches', description: 'Fish out of water begun as literal fish in odd places or odd depictions. These fish are depicted in an office scene. The fish question the office job in a childish way, pretending to do a job they don\'t know the purpose of.', url: 'https://drive.google.com/file/d/1BhxhXkFVcc3vZYghHpFL97bNg2-FPuPt/view?usp=share_link'
  },
  {
    id: 26, type: 'paintings and drawings', title: 'Forbes', medium: 'Gouache. oil pastel, and graphite', date: 'Spring 2019', dimension: '9.75 inches x 7.25 inches', description: 'This piece is part of a series of magazine covers Olivia painted to be unexpected, as a continuation of the fish out of water series.', url: 'https://drive.google.com/file/d/1kzy7MZvq_eNd3pEpknvIHcA5rLnm-wQC/view?usp=share_link'
  },
  {
    id: 27, type: 'paintings and drawings', title: 'National Geographic', medium: 'Watercolor', date: 'Spring 2019', dimension: '10.25 inches x 7 inches', description: 'This piece is part of a series of magazine covers Olivia painted to be unexpected, as a continuation of the fish out of water series.', url: 'https://drive.google.com/file/d/1CpTY5BRkxXEIhMIL223ZgOnyf_-k_ldi/view?usp=share_link'
  },
  {
    id: 28, type: 'developmental', title: 'Remember Me', medium: 'Charcoal and collage', date: 'January 2022', dimension: '10 inches x 10 inches', description: 'Part of a community project with Edouard Duval-Carrié at Centre College, people were asked how they remember the civil war. Olivia concentrated on forgotten black women. The terrible reality of black women\'s lives are often brushed over in history lessons, and therefore the mistreatment continues.', url: 'https://drive.google.com/file/d/1OALr6RHr-5lAD1z30w2yeS7XThG_DbkE/view?usp=share_link'
  },
  {
    id: 29, type: 'developmental', title: 'Paper Chihuly', medium: 'Paper, Gouache, Tape, and yarn', date: 'Fall 2021', dimension: '14 inches', description: 'A model of the Chihuly chandelier the Red Hornet, which memorized Olivia from a young age, at the local fine arts center.', url: 'https://drive.google.com/file/d/10XrmstpWuHFxoGlX5AFRTUwWqYIPvzdW/view?usp=share_link'
  },
  {
    id: 30, type: 'developmental', title: 'Boxes', medium: 'Charcoal on paper', date: 'Fall 2022', dimension: '12 inches x 18 inches', description: 'A technical exercise in tonal analysis and atmosphere.', url: 'https://drive.google.com/file/d/1ti9Wbb2suL9t7C6n4A_cqd6I40tFEDnP/view?usp=share_link'
  },
  {
    id: 31, type: 'developmental', title: 'Crumpled paper', medium: 'Charcoal on paper', date: 'Fall 2022', dimension: '12 inches x 16 inches', description: 'A technical exercise in tonal analysis and line relationship.', url: 'https://drive.google.com/file/d/1ckc8sCLXzR0VT_IedwjDMkjnYUU09So6/view?usp=share_link'
  },
  {
    id: 32, type: 'developmental', title: 'Curl', medium: 'Charcoal on paper', date: 'Fall 2022', dimension: '9 inches x 12 inches', description: 'A technical exercise in tonal analysis and terminator lines.', url: 'https://drive.google.com/file/d/1mreqylw-BLyi4dGIDO3tLcTQJJpjYfow/view?usp=share_link'
  },
  {
    id: 33, type: 'developmental', title: 'Bookshelf', medium: 'Watercolor, marker, and pen', date: 'Spring 2022', dimension: '4 inches x 6 inches', description: 'Illustration of Olivia\'s curated bookshelf.', url: 'https://drive.google.com/file/d/1GZcoIMD8fioFcPEg2JYH1N3ifCUixJ6T/view?usp=share_link'
  },
  {
    id: 34, type: 'fiber', title: 'Granny sweater', medium: 'Crochet', date: 'Spring 2021', dimension: '', description: 'The first thing Olivia ever crocheted was this sweater. Crocheting was a Craft she picked up over quarantine.', url: 'https://drive.google.com/file/d/1kyQv8hz7YF8nOghiVADmev4d4-eY-iIz/view?usp=share_link'
  },
  {
    id: 35, type: 'fiber', title: 'Sydney', medium: 'Crochet', date: 'December 2022', dimension: '4 inches x 6 inches', description: 'Sydney is a crocheted ornament of her sisters dog.', url: 'https://drive.google.com/file/d/1tZYPUP9zBIuOAN4J6vjue7OPxFjj9EFK/view?usp=share_link'
  },
  {
    id: 36, type: 'fiber', title: 'Flower bag', medium: 'Crochet', date: 'Fall 2021', dimension: '10 inches x 12 inches', description: 'Olivia used the left over yarn from the granny sweater to make a tote bag', url: 'https://drive.google.com/file/d/1NdMlI72iEZ5yVs1k0ztUw-iJ83s4DZO4/view?usp=sharing'
  },
  {
    id: 37, type: 'fiber', title: 'Olivia Octopus', medium: 'Embroidery', date: 'Fall 2020', dimension: '8 inch diameter', description: 'Time in isolation lead Olivia to expand and seek out many craft mediums, including embroidery.', url: 'https://drive.google.com/file/d/1IJjNxDsyOtu_CHdyFmBhUm8NPq8fXGIC/view?usp=share_link'
  }
]

