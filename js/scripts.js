window.onload = function () {
  const form = document.querySelector("form#radio-form3");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    //storing form inputs
    const name = document.querySelector("input#name").value;
    const dob = document.querySelector("input#born").value;
    const color = document.querySelector("input#color").value;
    const radioSelection1 = document.querySelector("input[name='level']:checked").value;
    const radioSelection2 = document.querySelector("input[name='interest']:checked").value;
    const radioSelection3 = document.querySelector("input[name='learner']:checked").value;

    // running a check for level
    let result = "";
    let description = "";
    if (radioSelection1 === "beginner") {
      result = name + ", how exciting, you are just starting your journey in the world of Software Development!";
    } else if (radioSelection1 === "intermidiate") {
      result = name + ", look at you going!";
    } else if (radioSelection1 === "advanced") {
      result = name + ", gread job reaching all the way to this point!";
    }

    // running a check for learning type
    if (radioSelection3 === "slow") {
      result = result + " No rush. Studying new concepts can be hard. Take a good care of yourself.";
    } else if (radioSelection3 === "moderate") {
      result = result + " It looks like you are ready for a new challenge.";
    } else if (radioSelection3 === "quick") {
      result = result + " We know you are a great learner and it's going to be easy for you.";
    }

    // running a check for preferences
    if (radioSelection2 === "web") {
      result = result + " Your best choice of programming languages is JavaScript.";
      description = "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. Although Java and JavaScript are similar in name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design."
    } else if (radioSelection2 === "iOS") {
      result = result + " Your best choice of programming languages is Swift.";
      description = "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community. First released in 2014,[10] Swift was developed as a replacement for Apple's earlier programming language Objective-C. Swift works with Apple's Cocoa and Cocoa Touch frameworks, and a key aspect of Swift's design was the ability to interoperate with the huge body of existing Objective-C code developed for Apple products over the previous decades. Apple intended Swift to support many core concepts associated with Objective-C, notably dynamic dispatch, widespread late binding, extensible programming and similar features, but in a safer way, making it easier to catch software bugs."
    } else if (radioSelection2 === "android") {
      result = result + " Your best choice of programming languages is Java.";
      description = "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. Java was originally developed by James Gosling at Sun Microsystems. It was released in May 1995 as a core component of Sun Microsystems' Java platform."
    } else if (radioSelection2 === "data") {
      result = result + " Your best choice of programming languages is Python.";
      description = "Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a batteries included language due to its comprehensive standard library. Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first released it in 1991. Python consistently ranks as one of the most popular programming languages."
    } else if (radioSelection2 === "cloud") {
      result = result + " Your best choice of programming languages is C++.";
      description = "C++ is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or C with Classes. The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Embarcadero, Oracle, and IBM, so it is available on many platforms. C++ was designed with systems programming and embedded, resource-constrained software and large systems in mind, with performance, efficiency, and flexibility of use as its design highlights. C++ has also been found useful in many other contexts, with key strengths being software infrastructure and resource-constrained applications, including desktop applications, video games, servers (e.g. e-commerce, web search, or databases), and performance-critical applications (e.g. telephone switches or space probes)."
    }

    //running a check for age
    if (dob > "1993 - 01 - 01") {
      result = result + " You have all the time in the world!";
    } else if (dob < "1992 - 12 - 31") {
      result = result + " Hurry up! New projects are awaiting!";
    }

    document.getElementById("output1").innerText = result;
    document.getElementById("output1").style.color = color;
    document.getElementById("output2").innerText = description;
  });

}