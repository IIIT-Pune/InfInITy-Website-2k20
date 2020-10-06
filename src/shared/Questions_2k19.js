const questions = [
  {
    code: `INF1908`,
    heading: `The Fallen Knight `,
    description: `<p> Ser Jaime Lannister was the best swordsman in the whole of Westeros. But after Locke cut off his right hand, he could no longer fight. He is now trying to learn addition of numbers.<br/><br/>He only knows how to add 1 to each number. He does it correctly except when the last digit is 9, he changes it to 0. Given a number N , you have to add 1 to it K times.<br/><br/>Output the final answer Ser Jaime will get. <br/> </p>`,
    input: [
      `First line contains an integer <strong>T</strong>, number of testcases. Then the testcases follow.`,
      `Each testcase contains a single line of input, two space separated integers <strong>N,K</strong>.`,
    ],
    output: `<p>For each testcase, output in a single line the final answer Ser Jaime will get.</p>`,
    constraints: [`1 ≤ T ≤ 100`, `1 ≤ N ≤ 10^5`, `1 ≤ K ≤ 10^5`],
    subtasks: ``,
    example: [[`1 <br/> 58 24 <br/>`], [`52<br/>`]],
    explanation: [],
    successfulSub: `762`,
    accuracy: `55.26`,
    reference: `https://www.codechef.com/INFY2019/problems/INF1908`,
  },

  {
    code: `INF1912`,
    heading: `A Plot by Littlefinger`,
    description:
      '<p>Cersei knows that there is an assassin in King`s Landing, sent by Lord Baelish and Olenna, to kill her and Joffrey. Imagine King`s Landing as a grid of <strong>N x N</strong> . She has placed <strong>K</strong> members of her Queensguard at certain points in the city, whose location is denoted by (r<sub>i</sub>,c<sub>i</sub>) for 1 ≤ i ≤ K . These watchers can watch all blocks in the same row and same column as their block. Note that, one block may contain more than one watcher.<br/><br/>Lord Baelish, however, knows about this and instructs the assassin to place himself in such a block that he would not get spotted by the Queenguard.<br/><br/>The probability that the assassin can position himself safely is denoted by <strong>P/Q</strong> where  <strong>P and Q</strong> are co-prime. Output two space separated integers P and Q or a string "Impossible" if it is impossible to do so.<br/></p>',

    input: [
      `First line contains an integer T, number of testcases. Then the testcases follow.`,
      `Each testcase contains a single line of input, two space separated integers <strong>N,K</strong>.`,
      `<strong>K</strong> lines follow. Each line contains two space separated integers r<sub>i</sub> and c<sub>i</sub>`,
    ],
    output: `<p>For each testcase , output two space separated integers <strong>P</strong> and <strong>Q</strong> or "Impossible" if there are no such integers.</p>`,
    constraints: [
      `1 ≤ T ≤ 10`,
      `1 ≤ N ≤ 10^5`,
      `1 ≤ K ≤ 10^5`,
      `1 ≤ r<sub>i</sub> , c<sub>i</sub> ≤ N`,
    ],
    subtasks: ``,
    example: [
      [`2<br/>2 2<br/>1 2<br/>2 2<br/>`, `3 2<br/>1 1<br/>2 2`],
      [`Impossible<br/>`, `1 9 <br/>`],
    ],
    explanation: [
      `For Test Case 1 , there is no such block where the assassin is safe.`,
      `For Test Case 2, the assassin can position himself at (3,3) to be safe.`,
    ],
    successfulSub: `308`,
    accuracy: `27.22`,
    reference: `https://www.codechef.com/INFY2019/problems/INF1912`,
  },
  {
    code: `INF1910`,
    heading: `Battle of the Blackwater`,
    description:
      '<p>The Battle of Blackwater Bay has just gotten over. There are hundreds of Stannis`s soldiers taken as prisoners by the Lannisters .These are denoted by <strong>N</strong>.<br/><br/>Joffrey has assigned the task of executing them to the Hound. The Hound has an idea. He makes the N prisoners numbered <strong> 1 , 2 , 3 </strong>upto N stand in a circle and places a sword in the hand of Prisoner <strong>1</strong>. He tells him to kill Prisoner <strong>2</strong> and pass the sword to Prisoner <strong>3</strong> , who in turn kills Prisoner <strong>4</strong> and passes his sword to Prisoner 5 and so on. This goes on until there is only one man left and the Hound then executes the last Prisoner.<br/><br/>Tyrion, however had asked the Hound to make a note of the order in which the Prisoners died and the Hound forgot to do so.<br/><br/>Given <strong>N</strong>and <strong>Q</strong> queries, for each query q<sub>i</sub> for 1 ≤ i ≤ Q , find the q<sub>i</sub><sup>th</sup> prisoner to die.<br/></p',
    input: [
      `First line contains an integer T, number of testcases. Then the testcases follow.`,
      `Each testcase contains of a single line of input, two space separated integers N,Q.`,
      'Q  lines follow. Each line contains a single integer q<sub>i</sub>',
    ],
    output: `<p>For each value of q<sub>i</sub> , output the number of the q<sub>i</sub><sup>th</sup> prisoner to die.</p>`,
    constraints: [
      `1 ≤ T ≤ 10`,
      `1 ≤ N ≤ 10^5`,
      `1 ≤ K ≤ 10^5`,
      `1 ≤ q<sub>i</sub> ≤ N`,
    ],
    subtasks: ``,
    example: [[`1<br/>8 2<br/>1<br/>8<br/>`], [`2<br/>1`]],
    explanation: [
      `The first prisoner to die was number 2 and the 8th prisoner to die was number 1.`,
    ],
    successfulSub: `150`,
    accuracy: `31.8`,
    reference: `https://www.codechef.com/INFY2019/problems/INF1910`,
  },
  {
    code: `INF1900`,
    heading: `Gift a Number! `,
    description: `<p>Valyrian steel was invented in Valyria, and was used to make weapons and various other items of unparalleled quality. But times have changed, now numbers have more value than weapons. Tobho Mott, a blacksmith trained in Qohor is known to reforge valyrian steel. He has following information regarding units of Valyrian required to forge each number :<br/><br/>
<strong>{8}</strong>  - 7 units<br/><br/>

    <strong>{0,6,9}</strong> - 6 units each<br/><br/>
    
    <strong> {2,3,5}</strong> - 5 units each<br/><br/>
    
    <strong> {4}</strong> - 4 units<br/><br/>
    
    <strong>{7} </strong>- 3 units<br/><br/>
    
    <strong> {1} </strong>- 2 units<br/><br/>
    
    Tobho has <strong>2N </strong>units of valyrian steel and has been assigned the task to gift two numbers each made up of<strong> exactly N</strong> units of steel, such that one of them is smallest and the other is largest. Since Tobho is weak in maths, help him find the two numbers for a given<strong> N</strong>.</p>`,
    input: [
      `First line contains an integer<strong> T</strong>, number of testcases. Then the testcases follow.`,
      `Each testcase contains of a single line of input, one integer <strong>N</strong>.`,
    ],
    output: `<p>For each testcase, output in a single line two space seperated integers, the smallest and largest number. Both numbers must be positive and contain no leading zeroes.</p>`,
    constraints: [`1 ≤ T ≤ 1000`, `2 ≤ N ≤ 1000`],
    subtasks: ``,
    example: [[`2<br/>7<br/>15<br/>`], [`8 711<br/>108 7111111`]],
    explanation: [
      `<strong>Testcase 1</strong> : Smallest number using 7 units of steel is 8. Largest number is 711 [3+2+2] units.`,
      `<strong>Testcase 2</strong> : Smallest number using 15 units of steel is 108 [2+6+7] units. Largest number is 7111111 [3+2+2+2+2+2+2] units.`,
    ],
    successfulSub: `29`,
    accuracy: `9.21`,
    reference: `https://www.codechef.com/INFY2019/problems/INF1900`,
  },
  {
    code: `INF1902`,
    heading: `Not Today!`,
    description: `<p>Lord Tyrion is a prisoner at the Eyrie and must set himself free. To do so he must complete a task given by Lysa Arryn. If he can't complete the task then he would be pushed to death through the Moon Door. Lord Tyrion doesn't wish to die today but he finds the task difficult to complete. He wants Your help!<br/><br/>Lysa Arryn has given Tyrion <strong>N</strong> pair of numbers <strong>(A<sub>1</sub>,B<sub>1</sub>),(A<sub>2</sub>,B<sub>2</sub>)...(A<sub>n</sub>,B<sub>n</sub>)</strong> and <strong>3</strong> bitwise operators to work with.<br/><br/>Tyrion must insert a Bitwise operator between each pair of numbers such that result of <strong>(A<sub>i</sub> operator B<sub>i</sub>)</strong> is distinct for all i. You can only use following Three operators: <br/><br/>Bitwise 'OR' - |<br/>Bitwise 'AND - &<br/>Bitwise 'XOR' - ^<br/><br/>Help Tyrion complete task to set him free.<br/></p>`,
    input: [
      `First line will contain <strong>N</strong>, number of pairs of numbers <strong>(A<sub>i</sub>, B<sub>i</sub>)</strong>. Then the N lines follow.`,
      `Each <strong>i<sup>th</sup></strong> line contains two integers<strong> A<sub>i</sub>, B<sub>i</sub></strong>.`,
    ],
    output: `<p>For each pair of numbers <strong>(A<sub>i</sub>, B<sub>i</sub>) </strong>in the same order as input, output a line containing a valid equation. Each equation should look like this : <strong>(A<sub>i</sub> operator B<sub>i</sub> = result)</strong> No two result should be same. If there are multiple valid answers, print any one of them. If no valid answer is possible then output a single line with the string "<strong>impossible</strong>".</p>`,
    constraints: [`1 ≤ N ≤ 6000`, `1  ≤ (A<sub>i</sub>,B<sub>i</sub>) ≤ 106`],
    subtasks: ``,
    example: [
      [
        `4<br/>2 7<br/>1 3<br/>4 4<br/>5 6`,
        `4<br/>2 6<br/>2 6<br/>2 6<br/>2 6`,
      ],
      [
        `2 ^ 7 = 5<br/>1 | 3 = 3<br/>4 | 4 = 4<br/>5 | 6 = 7<br/>`,
        `impossible`,
      ],
    ],
    explanation: [],
    successfulSub: `15`,
    accuracy: `21.43`,
    reference: `https://www.codechef.com/INFY2019/problems/INF1902`,
  },
  {
    code: `INF1906`,
    heading: `A Faceless Mission`,
    description: `
          <strong>"A man needs a name, a man will do the rest" - Jaqen H'ghar</strong>
          <p>
              Jaqen H'ghar has just arrived from Braavos. 
              He is one of the Faceless Men from Braavos and has arrived in Westeros to deliver what has been promised to the Red God. 
              It is known that Westeros <strong> N</strong> cities which are connected by <strong>M</strong> bidirectional roads.</p>
          <p>There are no multi-roads connecting same pair of cities directly, but there can be a road that can start and end at same city. 
              According to Jaqen, a path is Wonderful if he travels M−2 roads twice and the other 2 roads once. 
              A <strong>Wonderful path</strong> can start and finish at any city of Westeros.</p>
          <p>
              Two <strong>Wonderful</strong> paths are different, if sets of roads that are traveled once for both paths are different. 
              As Jaqen is busy on a <strong>Faceless Mission</strong> , help him find the number of <strong>Wonderful paths</strong>.
          </p>
        `,
    input: [
      `First line will contain two integers <strong>N</strong> and<strong> M </strong>Then the M lines follow.`,
      `Each line contains two integers u,v. That means there is a road between cities u and v.`,
    ],
    output: `<p>Total number of <strong>Wonderful paths</strong> in Westeros.</p>`,
    example: [
      [
        `3 4<br/>
          1 1<br/>
          1 3 <br/>
          1 2 <br/>
          2 3<br/>`,
        ` 5 4 <br/>
          1 2<br/>
          1 3<br/>
          2 3<br/>
          4 5`,
        ` 4 2 <br/>
          4 3 <br/>
          4 4`,
      ],
      [`6`, `0`, `1`],
    ],
    constraints: [`1≤N,M≤106`, `1≤u,v≤N`],

    explanation: [
      `  <p>
      <strong>EXPLANATION 1:</strong>:
          <ul>
              <li>let road (1,1) be a</li>
              <li>let road (1,2) be b</li>
              <li>let road (1,3) be c</li>
              <li>let road (2,3) be d</li>
          </ul>
          following can be Wonderful paths:
          <ul>
              <li>2−>1−>1−>1−>3−>2−>3 , All roads are traveled twice except b and c.</li>
              <li>1−>2−>3−>1−>1−>1−>3 , All roads are traveled twice except b and d.</li>
              <li>2−>3−>1−>1−>1−>2−>1 , All roads are traveled twice except d and c.</li>
              <li>1−>1−>3−>2−>3−>1−>2 , All roads are traveled twice except a and b.</li>
              <li>1−>1−>2−>3−>2−>1−>3 , All roads are traveled twice except a and c.</li>
              <li>3−>1−>2−>1−>1−>3−>2 , All roads are traveled twice except a and d.</li>
          </ul>
          There are more Wonderful paths that can be obtained, but the sets of roads
          they pass over once are same. Thus the answer is 6.
          </p>`,
      `<strong>EXPLANATION 2</strong>: Jaqen can not travel by all the roads.`,
      `<strong>EXPLANATION 3</strong>: Jaqen walks once on every road.`,
      `Note: <br/>It is not necessary for <strong>Wonderful path</strong> to go through all cities, Jaqen only care about roads.`,
    ],
    successfulSub: `8`,
    accuracy: `18.6`,
    reference: `https://www.codechef.com/INFY2019/problems/INF1906`,
  },
  {
    code: `INF1914`,
    heading: `  Tree of Happiness`,
    description: `
          <strong>"If you think this has a happy ending, you haven't been paying attention" - Ramsay Bolton.</strong><br/><br/>
          <p>
              Highgarden is famous for its wealth and riches. It is said that there is nothing which you cannot get in Highgarden. 
              The City Market in Highgarden is placed in a tree structure and each shop has a number on it. 
              The tree is rooted at shop number <strong>1</strong>. There are N such shops and each shop sells only one item. 
              The price of the item sold by each of the <strong>N </strong>shops is given as <strong>A<sub>1</sub>,A<sub>2</sub>,..,A<sub>N</sub>.</strong> 
              There are some traders who travel from Shop <strong>A</strong> to Shop <strong>B</strong> and they always buy the item from each shop they encounter while travelling from <strong>A to B</strong>. 
              They travel in such a way from A to B, such that minimum number of shops are encountered in the way.
          </p>
          <p>
              Though they have a lot of money, they have a strange system of paying. 
              They divide their money into some bags, such that each bag has an equal number of coins. 
              Whenever they enter a shop to buy the item, they pay directly by giving some bags, without taking out loose change from a bag. 
              Each trader knows the prices of shop items and prepares the bags of money in advance such that no extra money has to be given for each item. 
              Since he's going to travel for long, he also wants to minimize the number of bags of money he carries with him.
          </p>
          <p>
              There are two types of queries : </br>
              <strong>1 x val</strong> : Update the price of item in shop x to val.</br>
              <strong>2 a b</strong> : If a trader is travelling from a to b, calculate the minimum number of bags that the trader has to carry with him.
          </p>
        `,
    input: [
      `First line will contain <strong>2</strong> space separated integers,<strong> N and Q</strong>, denoting the number of shops and number of queries respectively.`,
      `The second line contains<strong> N </strong> separated integers <strong>A<sub>1</sub>,A<sub>2</sub>,..,A<sub>N</sub> </strong>denoting the price of item in the N shops.`,
      `The next <strong>N−1</strong> lines contain two integers u ad v denoting that there is a road between shops u and v.`,
      `The next Q lines contain queries of the form:
          <ul>
          <li>
              Type 1 has the form <strong>1 x val</strong>
          </li>
          <li>Type 2 has the form <strong>2 a b</strong></li>
          </ul>`,
    ],
    output: `<p>For each query of <strong>Type 2</strong>, output the minimum number of bags of money that the trader needs to carry with him while travelling from shop <strong>a</strong> to shop <strong>b</strong></p>`,
    constraints: [
      `1 ≤ N,Q ≤ 200000`,
      `1 ≤ A<sub>i</sub>, val ≤ 109`,
      `1 ≤ x,a,b ≤ N`,
    ],
    example: [
      [
        `<p>
              6 3 <br />
              8 4 6 2 16 2<br />
              1 2<br />
              2 4<br />
              1 3<br />
              2 5<br />
              3 6<br />
              2 5 6<br />
              1 3 12
              <br />2 2 3
          </p>`,
      ],
      [`18 <br/>6`],
    ],
    explanation: [
      `The path travelled by trader who goes from shop 5 to shop 6 is <strong>5−>2−>1−>3−>6</strong>. He needs<strong> 36</strong> coins and if he keeps <strong>2</strong> coins per bag, he will have to carry 18 bags which is the minimum number of bags which he has to carry.`,
    ],
    successfulSub: `8`,
    accuracy: `32`,
    reference: `https://www.codechef.com/INFY2019/problems/INF1914`,
  },
  {
    code: `INF1904`,
    heading: `Torture`,
    description: `
          <strong>"This isn&#700;t happening to you for a reason. Well, one reason. I enjoy it" - Ramsay Bolton.</strong><br/><br/>
          <p>
          Theon is in the captivity of Ramsay Bolton and he is very much desperate to escape from him. Ramsay knows this and he gives him a problem which if Theon could solve, he would be set free. But Theon knows the true nature of Ramsay and therefore he knows the problem given to him will be so hard that he won&#700;t be able to solve it. So as his last chance, he is asking for your help to solve the problem and set him free.<br/>
          <br/>
          The problem is as follows :-<br/>
        
          Theon is given a list of <strong>N </strong>numbers <strong>A1,A2,..,AN</strong>. Ramsay will ask<strong> Q</strong> questions to Theon and he has to answer all of them. Each question will contain one integer <strong>R</strong>, and Theon has to do the following task :
          Find the sum of <strong>F(X) </strong>for all distinct integers present in the list from index <strong>1 to R</strong>. <br/>
          <strong>F(X) = (count of X present in the list from index 1 to R)<sup>2</sup></strong> <br/><br/>
          To make the problem more harder, Ramsay can change the value of a number in the given list when he wishes to. Help Theon answer all the questions so that he will be freed from the wrath of Ramsay. Since the value of expression can be large output its value modulo <strong>1000000007</strong>.
        </p>`,
    input: [
      `First line will contain <strong>2 </strong>space separated integers, <strong>N and Q</strong>, denoting the size of list and number of questions respectively.`,
      `The second line contains<strong> N</strong> space separated integers <strong>A<sub>1</sub>,A<sub>2</sub>,..,A<sub>N</sub> </strong> denoting the value of each number in the list.`,
      `The next <strong>Q</strong> lines contain queries of the form:
          <ul>
          <li>
              Type 1 has the form <strong>1 x val</strong> : Set <strong>A<sub>x</sub></strong> = val
          </li>
          <li>Type 2 has the form <strong>2 r</strong> : Value of the expression for the given r</li>
          </ul>`,
    ],
    output: `<p>For each query of <strong>Type 2</strong>, output the value of expression modulo <strong>1000000007</strong>.</p>`,
    constraints: [
      `1 ≤ N,Q ≤ 200000`,
      `1 ≤ A<sub>i</sub>, val ≤ 109`,
      `1 ≤ x,r ≤ N`,
    ],
    example: [
      [
        `<p>
              6 4
              <br />
              1 4 2 4 4 3
              <br />
              2 5
              <br />
              1 4 2
              <br />
              1 6 1
              <br />
              2 6
          </p>`,
      ],
      [`<p>11</br>12</p>`],
    ],

    explanation: [
      `<p>
              Since the <strong>1st</strong> question is of <strong>Type 2</strong>, value of expression is -
              <br />
              1<sup>2</sup> + 3<sup>2</sup> + 1<sup>2</sup> = 11
              <br />
              Modified list after <strong>2nd</strong> question :
              <br />
              {1, 4, 2, 4, 2, 3}
              <br />
              Modified list after <strong>3rd</strong> question :
              <br />
              {1, 4, 2, 4, 2, 1}
              <br />
              Since the <strong>4th</strong> question is of <strong>Type 2</strong>, value of expression is -
              <br />
              2<sup>2</sup> + 2<sup>2</sup> + 2<sup>2</sup> = 12
          </p>`,
    ],
    successfulSub: `3`,
    accuracy: `9.38`,
    reference: `https://www.codechef.com/INFY2019/problems/INF1904`,
  },
];

export default questions;
