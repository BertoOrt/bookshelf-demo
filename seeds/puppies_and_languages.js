
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('puppies').del(),
    knex('languages').del()
  ]).then(function () {
    return knex('puppies_languages').del();
  }).then(function () {
    return Promise.all([
      knex('puppies').insert({
        name: "Iago",
        bio: "Cat snacks meowzer! chew on cable or sleep nap. Lick the other cats lay on arms while you're using the keyboard but make muffins, or stare at the wall, play with food and get confused by dust, or i like big cats and i can not lie. Nap all day why must they do that all of a sudden cat goes crazy, for kitty loves pigs eat a plant, kill a hand leave hair everywhere. Slap owner's face at 5am until human fills food dish meowwww, meowing non stop for food or spread kitty litter all over house meow stand in front of the computer screen lick the plastic bag. Attack feet. ",
        year: 2,
        image: "http://buzzsharer.com/wp-content/uploads/2015/08/whippet-dog-black.jpg"
      }),
      knex('puppies').insert({
        name: "Scooby",
        bio: "El formato del programa y el elenco han cambiado significativamente a lo largo de los años. Las versiones más conocidas incluyen a un perro de raza gran danés parlante llamado Scooby-Doo y a cuatro adolescentes llamados Fred Jones, Daphne Blake, Vilma Dinkley y Shaggy Rogers, los cuales viajan a lo largo del mundo en una camioneta llamada \"La Máquina del Misterio\" (Mystery Machine en su término original), por la cual se transportan de un lugar a otro resolviendo misterios relacionados con fantasmas y otras fuerzas sobrenaturales. Al final de cada episodio, las fuerzas sobrenaturales tienen una explicación racional -generalmente un criminal que espanta a la gente para poder cometer sus crímenes -. Posteriores temporadas del programa presentaron variaciones en el tema sobrenatural, e incluyeron nuevos personajes, como el primo de Scooby, Scooby-Dum y su sobrino, Scrappy-Doo.",
        year: 7,
        image: "http://vignette3.wikia.nocookie.net/p__/images/8/8c/Scooby-Doo-scooby-doo-5194607-445-722.jpg/revision/latest?cb=20120115152315&path-prefix=protagonist"
      }),
      knex('puppies').insert({
        name: "Doge",
        bio: "Much Wow. How Style. Very Dog.",
        year: 3,
        image: "https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg"
      })
    ])
  }).then(function () {
    return Promise.all([
      knex('languages').insert({
        name: "Java",
        bio: "Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers \"write once, run anywhere\" (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture. As of 2016, Java is one of the most popular programming languages in use,particularly for client-server web applications, with a reported 9 million developers. Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in 1995 as a core component of Sun Microsystems' Java platform. The language derives much of its syntax from C and C++, but it has fewer low-level facilities than either of them.",
        year: 1995,
        image: "https://upload.wikimedia.org/wikipedia/en/8/88/Java_logo.png"
      }),
      knex('languages').insert({
        name: "Swift",
        bio: "Swift is a general-purpose, multi-paradigm, compiled programming language created for iOS, macOS, watchOS, tvOS and Linux developed by Apple Inc. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products. Swift is intended to be more resilient to erroneous code (\"safer\") than Objective-C and also more concise. It is built with the LLVM compiler framework included in Xcode 6 and later and uses the Objective-C runtime, which allows C, Objective-C, C++ and Swift code to run within a single program.",
        year: 2014,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/490px-Swift_logo.svg.png"
      }),
      knex('languages').insert({
        name: "Ruby",
        bio: "Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro \"Matz\" Matsumoto in Japan.",
        year: 1995,
        image: "https://upload.wikimedia.org/wikipedia/en/8/88/Java_logo.png"
      }),
      knex('languages').insert({
        name: "Golang",
        bio: "Go (often referred to as golang) is an open source programming language created at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson. It is a compiled, statically typed language in the tradition of Algol and C, with garbage collection, limited structural typing, memory safety features and CSP-style concurrent programming features added.",
        year: 2009,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Golang.png/600px-Golang.png"
      }),
      knex('languages').insert({
        name: "JavaScript",
        bio: "JavaScript (/ˈdʒɑːvəˌskrɪpt/) is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification. Alongside HTML and CSS, it is one of the three core technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern Web browsers without plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles. It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded.",
        year: 1995,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
      })
    ])
  })
};
