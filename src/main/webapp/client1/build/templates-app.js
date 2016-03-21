angular.module('templates-app', ['about/about.tpl.html', 'employee/create/templates/employeeForm.tpl.html', 'home/home.tpl.html', 'login/login.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("employee/create/templates/employeeForm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("employee/create/templates/employeeForm.tpl.html",
    "\n" +
    "<div class=\"container candidateform-container\">\n" +
    "    <div class=\"row centered-form\">\n" +
    "       <br>\n" +
    "\n" +
    "        <div class=\"col-md-2\"></div>\n" +
    "        <div class=\"col-md-8 col-md-offset2\">\n" +
    "                            <form name=\"employeeForm\" class=\"form\" novalidate>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-md-4\">\n" +
    "                                        <label class=\"control-label\" for=\"firstName\">First name: <span class=\"asteriskSize red\">*</span></label>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <input id=\"firstName\" type=\"text\" class=\"form-control input-sm\" required ng-model=\"user.firstName\" name=\"firstName\"\n" +
    "                                                   placeholder=\"First name\">\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-4 middle-name\">\n" +
    "                                        <label class=\"control-label\" for=\"middleName\">Middle Name:</label>\n" +
    "                                        <div class=\"form-group\">\n" +
    "\n" +
    "                                            <input id=\"middleName\" type=\"text\" class=\"form-control input-sm\"  ng-model=\"user.middleName\" name=\"middleName\"\n" +
    "\n" +
    "                                                   placeholder=\"Middle name\">\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"col-md-4\">\n" +
    "                                        <label class=\"control-label\" for=\"lastName\">Last Name: <span class=\"asteriskSize red\">*</span></label>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <input id=\"lastName\" type=\"text\" class=\"form-control input-sm\" required ng-model=\"user.lastName\" name=\"lastName\"\n" +
    "                                                   placeholder=\"Last name\">\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-md-6\">\n" +
    "                                        <label class=\"control-label\" for=\"email\">Email: <span class=\"asteriskSize red\">*</span></label>\n" +
    "                                        <input id=\"email\" type=\"text\" class=\"form-control input-sm\"\n" +
    "                                               name=\"email\"\n" +
    "                                               required ng-model=\"user.email\" placeholder=\"Email\">\n" +
    "\n" +
    "                                        <p class=\"red\"></p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-6\">\n" +
    "                                        <label class=\"control-label\" for=\"empCode\">Employee Code: <span class=\"asteriskSize red\">*</span></label>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <input id=\"empCode\" type=\"text\" class=\"form-control input-sm\" required ng-model=\"user.empCode\" name=\"empCode\"\n" +
    "                                                   placeholder=\"Employee Code\">\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-md-6\">\n" +
    "                                        <label class=\"control-label\" for=\"designation\">Designation: <span class=\"asteriskSize red\">*</span></label>\n" +
    "                                        <input id=\"designation\" type=\"text\" name=\"designation\" class=\"form-control input-sm\" required ng-model=\"user.designation\" placeholder=\"Designation\">\n" +
    "                                        <p class=\"red\"></p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-6\">\n" +
    "                                        <label class=\"control-label\" for=\"joiningDate\">Joining Date: <span class=\"asteriskSize red\">*</span></label>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <input id=\"joiningDate\" type=\"text\" class=\"form-control input-sm\" required ng-model=\"user.joiningDate\" name=\"joiningDate\"\n" +
    "                                                   placeholder=\"Joining Date\">\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label class=\"control-label\" for=\"address\">Address:</label>\n" +
    "                                    <input id=\"address\" type=\"text\" class=\"form-control input-sm\"\n" +
    "                                           name=\"address\"\n" +
    "\n" +
    "                                           ng-model=\"user.address\" placeholder=\"Address\">\n" +
    "\n" +
    "                                    <p class=\"red\"></p>\n" +
    "                                </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-md-4\">\n" +
    "                                        <label class=\"control-label\" for=\"postalCode\">Postal Code:</label>\n" +
    "                                        <div class=\"form-group\" >\n" +
    "\n" +
    "                                            <input id=\"postalCode\" type=\"text\" class=\"form-control input-sm\"\n" +
    "                                                   name=\"postalCode\"\n" +
    "                                                   ng-model=\"user.postalCode\"\n" +
    "                                                   placeholder=\"Postal Code\"><span class=\"hint\"></span>\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-4\">\n" +
    "                                        <label class=\"control-label\" for=\"mobilNumber\">Mobile Number:</label>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <input id=\"mobilNumber\" type=\"text\" class=\"form-control input-sm\"\n" +
    "                                                   name=\"mobileNo\"\n" +
    "                                                   ng-model=\"user.mobileNumber\"\n" +
    "                                                   placeholder=\"Mobile Number\">\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-md-4\">\n" +
    "                                        <label class=\"control-label\" for=\"homeNumber\">Phone Number:</label>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <input id=\"homeNumber\" type=\"text\" class=\"form-control input-sm\"\n" +
    "                                                   name=\"homeNo\"\n" +
    "                                                   ng-model=\"user.homeNumber\"\n" +
    "                                                   placeholder=\"Phone Number\">\n" +
    "                                            <p class=\"red\"></p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                </div>\n" +
    "                                 <br>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-md-4\"></div>\n" +
    "                                    <div class=\"col-md-4 col-md-offset-4\">\n" +
    "                                        <button class=\"btn btn-primary\" type=\"submit\" style=\"width:49%;\" ng-click=\"createEmployee()\" >Submit</button>\n" +
    "                                        <button class=\"btn btn-danger\"  type=\"button\" ng-click=\"resetAll()\" style=\"width:48%;\">Reset</button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <br><br>\n" +
    "                            </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>CodeBreakers</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    ​\n" +
    "    ​    Every single bluepiEmployee _i​​;\n" +
    "    for ( _i = GEEK ; _i < Till the Proj​ect succesfully Ends; _i never quits) {\n" +
    "    works on POC's;\n" +
    "    works on the architecture design;\n" +
    "    works on the database modelling;\n" +
    "    works on different technology;\n" +
    "    works on fullstack;\n" +
    "    does unit testing;\n" +
    "    }\n" +
    "\n" +
    "    if(! everything goes well){\n" +
    "    _i  = fixes all the bugs, implements any adhoc changes from client;\n" +
    "    }\n" +
    "\n" +
    "    _i = delivers the current project, parties a little and starts with new project;\n" +
    "\n" +
    "    _i = EACH _i ROCKS;\n" +
    "    ​\n" +
    "    System.exit(0);​\n" +
    "\n" +
    "\n" +
    "  </p>\n" +
    "\n" +
    "  <ul class=\"list-inline social-buttons\">\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=ngbp&amp;repo=ngbp&amp;type=watch&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"110\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=ngbp&amp;repo=ngbp&amp;type=fork&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"95\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "       <iframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\"\n" +
    "        src=\"https://platform.twitter.com/widgets/tweet_button.html?url=http%3A%2F%2Fbit.ly%2FngBoilerplate&counturl=http%3A%2F%2Fngbp.github.com%2Fngbp&text=Check%20out%20%23ngbp%20-%20an%20awesome%20kickstarter%20for%20web%20projects%20%7C&hashtags=angularjs&via=joshdmiller&related=joshdmiller\"\n" +
    "        style=\"width:130px; height:20px;\"></iframe>\n" +
    "    </li>\n" +
    "    <li plus-one></li>\n" +
    "  </ul> \n" +
    "  \n" +
    "  <div class=\"btn-group\">\n" +
    "    <a href=\"https://github.com/ngbp/ngbp#readme\" class=\"btn btn-large btn-default\">\n" +
    "      <i class=\"fa fa-book\"></i>\n" +
    "      Read the Docs\n" +
    "    </a>\n" +
    "    <a href=\"https://github.com/ngbp/ngbp\" class=\"btn btn-large btn-success\">\n" +
    "      <i class=\"fa fa-download\"></i>\n" +
    "      Download\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"container login-container\">\n" +
    "    <div class=\"row centered-form\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <center><h1> <span>Login Into the account</span></h1></center>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-4 col-md-offset-4 main-signin-box\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12 login-box-left\">\n" +
    "                            <form  ng-submit=\"login()\" name=\"loginForm\" novalidate>\n" +
    "\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <input  class=\"form-control input-sm\" ng-model=\"credentials.email\"  name=\"email\"\n" +
    "                                            required>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <input class=\"form-control input-sm \" type=\"password\" ng-model=\"credentials.password\"  name=\"password\"\n" +
    "                                           required>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"for_pass\">\n" +
    "                                    <a href=\"#/forgetPassword\">Reset Password?</a>\n" +
    "                                    <button class=\"btn pull-right\" ng-class=\"{'btn-primary':loginBtnLabel == 'Login','btn-success':loginBtnLabel != 'Login'}\" type=\"submit\" style=\"width:48%\">\n" +
    "                                        <i class=\"fa\" ng-class=\"{'fa-sign-in':loginBtnLabel == 'Login','fa-spinner fa-spin fa-1x':loginBtnLabel != 'Login'}\"></i>\n" +
    "                                       Login\n" +
    "                                    </button>\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>  <br><br><br>\n" +
    "\n" +
    "");
}]);
