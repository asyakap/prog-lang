window.onload = function () {
  const form = document.querySelector("form#radio-form4");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    //storing form inputs
    const name = document.querySelector("input#name").value;
    const dob = document.querySelector("input#born").value;
    const color = document.querySelector("input#color").value;
    const radioSelection1 = document.querySelector("input[name='level']:checked").value;
    const radioSelection2 = document.querySelector("input[name='interest']:checked").value;
    const radioSelection3 = document.querySelector("input[name='learner']:checked").value;

    var know = new Array(5);
    function getValue() {
      var checkboxes =
        document.getElementsByName("know");

      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          know[i] = checkboxes[i].value;
        }
      }
      return know;
    }
    getValue();

    let result = "";
    let description = "";

    //running a check for empty fields
    if ((name === "") || (dob === "")) {
      result = "Please fill all required fields";
    }
    // running a check for level
    if ((radioSelection1 === "beginner") && (name !== "") && (dob !== "")) {
      result = name + ", how exciting, you are just starting your journey in the world of Software Development!";
    } else if ((radioSelection1 === "intermidiate") && (name !== "") && (dob !== "")) {
      result = name + ", look at you going!";
    } else if ((radioSelection1 === "advanced") && (name !== "") && (dob !== "")) {
      result = name + ", gread job reaching all the way to this point!";
    }

    // running a check for learning type
    if ((radioSelection3 === "slow") && (name !== "") && (dob !== "")) {
      result = result + " No rush. Studying new concepts can be hard. Take a good care of yourself.";
    } else if ((radioSelection3 === "moderate") && (name !== "") && (dob !== "")) {
      result = result + " It seems that you are ready for a new challenge.";
    } else if ((radioSelection3 === "quick") && (name !== "") && (dob !== "")) {
      result = result + " We know you are a great learner and it's going to be easy for you.";
    }

    // running a check for preferences and known languages
    //if web selected and doesn't know javaScript, display JavaScript
    if ((radioSelection2 === "web") && (know[0] !== "javaScript") && (name !== "") && (dob !== "")) {
      result = result + " Your best choice of programming languages is JavaScript.";
      description = "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. Although Java and JavaScript are similar in name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design."

      //if web is selected and knows javaScript, display Kotlin
    } else if ((radioSelection2 === "web") && (know[0] === "javaScript") && (name !== "") && (dob !== "")) {
      result = result + " It looks like you've already learned JavaScript. How about mastering Kotlin?";
      description = "Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, [failed verification] but type inference allows its syntax to be more concise. Kotlin mainly targets the JVM, but also compiles to JavaScript (e.g., for frontend web applications using React) or native code via LLVM (e.g., for native iOS apps sharing business logic with Android apps). Language development costs are borne by JetBrains, while the Kotlin Foundation protects the Kotlin trademark."

      //if iOS is selected and doesn't know Swift, display Swift
    } else if ((radioSelection2 === "iOS") && (know[1] !== "swift") && (name !== "") && (dob !== "")) {
      result = result + " Your best choice of programming languages is Swift.";
      description = "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community. First released in 2014, Swift was developed as a replacement for Apple's earlier programming language Objective-C. Swift works with Apple's Cocoa and Cocoa Touch frameworks, and a key aspect of Swift's design was the ability to interoperate with the huge body of existing Objective-C code developed for Apple products over the previous decades. Apple intended Swift to support many core concepts associated with Objective-C, notably dynamic dispatch, widespread late binding, extensible programming and similar features, but in a safer way, making it easier to catch software bugs."

      //if iOS is selected and knows Swift, display React Native
    } else if ((radioSelection2 === "iOS") && (know[1] === "swift") && (name !== "") && (dob !== "")) {
      result = result + " It looks like you've already learned Swift. How about mastering React Native?";
      description = "React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.[11] It is also being used to develop virtual reality applications at Oculus."

      //if Android is selected and doesn't know Java, display Java
    } else if ((radioSelection2 === "android") && (know[2] !== "java") && (name !== "") && (dob !== "")) {
      result = result + " Your best choice of programming languages is Java.";
      description = "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. Java was originally developed by James Gosling at Sun Microsystems. It was released in May 1995 as a core component of Sun Microsystems' Java platform."

      //if Android is selected and knows Java, display Kotlin
    } else if ((radioSelection2 === "android") && (know[2] === "java") && (name !== "") && (dob !== "")) {
      result = result + " It looks like you've already learned Java. How about mastering Kotlin?";
      description = "Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, [failed verification] but type inference allows its syntax to be more concise. Kotlin mainly targets the JVM, but also compiles to JavaScript (e.g., for frontend web applications using React) or native code via LLVM (e.g., for native iOS apps sharing business logic with Android apps). Language development costs are borne by JetBrains, while the Kotlin Foundation protects the Kotlin trademark."

      //if Data Science is selected and doesn't know Python, display Python
    } else if ((radioSelection2 === "data") && (know[3] !== "python") && (name !== "") && (dob !== "")) {
      result = result + " Your best choice of programming languages is Python.";
      description = "Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a batteries included language due to its comprehensive standard library. Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first released it in 1991. Python consistently ranks as one of the most popular programming languages."

      //if Data Science is selected and knows Python, display NodeJS
    } else if ((radioSelection2 === "data") && (know[3] === "python") && (name !== "") && (dob !== "")) {
      result = result + " It looks like you've already learned Python. How about mastering NodeJS?";
      description = "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The functionality of running scripts server-side produces dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a JavaScript everywhere paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games)."

      //if Coud Computing is selected and doesn't know C++, display C++
    } else if ((radioSelection2 === "cloud") && (know[4] !== "cplus") && (name !== "") && (dob !== "")) {
      result = result + " Your best choice of programming languages is C++.";
      description = "C++ is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or C with Classes. The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Embarcadero, Oracle, and IBM, so it is available on many platforms. C++ was designed with systems programming and embedded, resource-constrained software and large systems in mind, with performance, efficiency, and flexibility of use as its design highlights. C++ has also been found useful in many other contexts, with key strengths being software infrastructure and resource-constrained applications, including desktop applications, video games, servers (e.g. e-commerce, web search, or databases), and performance-critical applications (e.g. telephone switches or space probes)."

      //if Coud Computing is selected and knows C++, display C++
    } else if ((radioSelection2 === "cloud") && (know[4] === "cplus") && (name !== "") && (dob !== "")) {
      result = result + " It looks like you've already learned C++. How about mastering Ruby?";
      description = "Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro Matz Matsumoto in Japan. Ruby is dynamically typed and uses garbage collection and just-in-time compilation. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. According to the creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, BASIC, Java and Lisp."
    }

    //running a check for age
    if ((dob > "1993 - 01 - 01") && (name !== "") && (dob !== "")) {
      result = result + " You have all the time in the world!";
    } else if ((dob < "1992 - 12 - 31") && (name !== "") && (dob !== "")) {
      result = result + " Hurry up! New projects are awaiting!";
    }

    document.getElementById("output1").innerText = result;
    document.getElementById("output1").style.color = color;
    document.getElementById("output2").innerText = description;
    document.getElementById("output2").style.color = color;
  });

}