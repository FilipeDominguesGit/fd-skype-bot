const generate = function (firstName, lastName, genderData, type, level) {

    var pronoun = genderData.pronoun;
    var pronounCaps = genderData.pronounCaps;
    var personalPronoun = genderData.personalPronoun;
    var personalPronounCaps = genderData.personalPronounCaps;
    var possessive = genderData.possessive;
    var possessiveCaps = genderData.possessiveCaps;
    var pastPronoun = genderData.pastPronoun;
    var pastPronounCaps = genderData.pastPronounCaps;

    attributeText = {
        "accuracy": {
            0: "In the current period, slipshod work by " + firstName + " can be compared to a tetraplegic taking swimming classes.",
            1: "In the current period, slipshod work by " + firstName + " has been presented with serious inaccuracies, putting the business at risk.",
            2: "" + firstName + " has regularly presented work with errors in the current period While the consequences are not serious, much more attention to detail is required",
            3: "One or two minor errors have been spotted in work presented in the current period, not putting the business at risk, but which could have been prevented if the facts and figures had been properly checked",
            4: "" + firstName + " is generally good with detail and checks work thoroughly, but there have been one or two minor errors in work presented in the current period",
            5: "" + firstName + " pays great attention to detail. " + pronounCaps + " always presented work properly checked and completely free of error."
        },
        "ambition": {
            0: "" + firstName + " ambition must only be breathing, because other type of work seems too challenging.",
            1: "Work is a low priority for " + firstName + ". Keeping the job – or losing it – is of no concern to " + personalPronoun + ".",
            2: "" + firstName + " accepts that promotion is unlikely. " + pronounCaps + " does the job as well as it needs to be done, but not better.",
            3: "Expects promotion to a higher grade at some time in the future, although success at work is not the highest priority to " + personalPronoun + ". Not one to exert " + pastPronoun + " unduly.",
            4: "" + firstName + " is aiming for promotion, but recognizes that capabilities and prospects are limited " + pronounCaps + " sets high personal standards in an attempt to do as well as possibly",
            5: "Aiming for a top job in the organization. " + pronounCaps + " sets very high standards, aware that this will bring attention and promotion."
        },
        "analytical": {
            0: "When faced with a set of data, " + firstName + " will salivate and wonder about the result of 1+1.",
            1: "When faced with a set of data, " + firstName + " is completely unable to organize it or draw conclusions.",
            2: "" + firstName + " will try to organize and draw conclusions from a set of data, but usually arrives at the wrong answer, because not all the facts have been taken into account.",
            3: "When working with a set of data, " + firstName + " is beginning to learn how to organize the results, but is not yet ready or competent enough to draw the right conclusions.",
            4: "From a set of data, " + firstName + " is able to establish a principle, or work out a rule, or suggest a reason for failure or success. " + possessiveCaps + " analysis is usually accurate but not original.",
            5: "From a set of data, " + firstName + " is able to establish a principle, or work out a rule, or suggest a reason for failure or success. " + possessiveCaps + " analysis is always accurate and sometimes original."
        },
        "artistic": {
            0: "When faced with a pack of cranyons, " + pronoun + "  starts to eat them.",
            1: "Has no artistic capability or craft skills at all.",
            2: "Tries to copy, but with limited ability.",
            3: "" + firstName + " can copy reasonably accurately, but " + pronoun + " does not produce " + possessive + " own ideas.",
            4: "" + firstName + " has strong artistic or craft skills.",
            5: "" + firstName + " has outstanding artistic or craft skills, bringing creativity and originality to the task."
        },
        "assertive": {
            0: "" + firstName + " is weak and vacillating",
            1: "" + firstName + " is weak and vacillating. Always agrees with the other party and cannot maintain or defend " + possessive + " own position.",
            2: "Tends to go along with other peoples’ ideas, and lacks the confidence to present " + possessive + " own ideas. Not good at arguing a casy",
            3: "Keen to put " + possessive + " own ideas across, but " + firstName + " does not give others the chance to express their view. May be tempted to overlook the input of others.",
            4: "When ideas are challenged by others, " + firstName + " listens to their view and tries to defend a position, but may not yet have the experience or authority to present the case well. Or may be over-aggressive in defending a position.",
            5: "When ideas are challenged by others, " + firstName + " listens to their view politely, but is able to maintain a position firmly and persuasively without aggression."
        },
        "attendance": {
            0: "" + firstName + " might think that just by being present it means " + pronoun + "'s working. full disclosure: it's not.",
            5: "No absences without valid reason in 6 months.",
            4: "Missed fewer than 2 days without valid reason in 6 months.",
            3: "Missed more than 2 but fewer than 5 days without valid reason in 6 months.",
            2: "Missed more than 5 but fewer than 10 days without valid reason in 6 months.",
            1: "Missed more than 10 days without valid reason in 6 months."
        },
        "care": {
            0: "" + firstName + " is so tidy that " + pronoun + "+ uses the water dispenser as a sink to clean " + pastPronoun + ".",
            5: "Meticulous in keeping the workplace clean and tidy. " + firstName + " makes a habit of keeping own area clean and hazard-free and also assists and encourages others to do the same.",
            4: "Keeps own area neat, tidy and hazard-free, but does not necessarily help or encourage others to do the same.",
            3: "Generally clean and tidy, but at times, " + possessive + " work-station needs organizing and tidying. Sometimes " + firstName + " fails to clean up at the end of the day.",
            2: "" + firstName + " regularly leaves work-station untidy, during the day and at the end of it.",
            1: "Lack of concern for tidiness in the workplace makes " + possessive + " work-station inefficient and perhaps hazardous to self and others."
        },
        "communication": {
            0: "" + firstName + " communicates really well with other monkeys of " + possessive + " species.",
            5: "Always succeeds in explaining ideas clearly. Others find " + firstName + " easy to understand. " + pronounCaps + " also has the ability to listen carefully to what others are saying, to understand and then to respond appropriately. Conversations with " + firstName + " are two-way.",
            4: "" + firstName + " has the potential to be a good communicator, although may occasionally confuse some listeners. Gives others the chance to speak too, and seems to take on board their point of view.",
            3: "Communicates reasonably well, but not someone you would choose to present a case effectively or to get across detailed instructions. " + firstName + " generally seems to listen to others and take on board their views.",
            2: "Not a comfortable communicator. Either somewhat reticent, or talks too much and has one-way conversations.",
            1: "" + firstName + " doesn't put across ideas well. Either doesn’t make an impression at all, or others find explanations confusing. Also takes no notice whatsoever of the contributions of others."
        },
        "completing": {
            5: "" + firstName + " always completes any assignment on time and to a high standard.",
            4: "" + firstName + " completes 90% of assignments on time and to a good standard.",
            3: "" + firstName + " completes more than 75% but less than 90% of assignments on time and to a good standard.",
            2: "" + firstName + " completes more than 50% but less than 75% of assignments on time and to a good standard.",
            1: "Less than 50% of tasks are completed on time or to a good standard.",
            0: "" + firstName + " completes the assignments on time and to a good standard, these success rate may, or may not, be the result of outsourcing to the adjacent individuals."
        },
        "concentration": {
            5: "Able to concentrate and stay focused for periods of several hours, even when tasks are relatively mundane, and doesn't make mistakes. " + pronounCaps + " has a high boredom threshold.",
            4: "Able to concentrate and stay focused for period of several hours when a task is interesting, but attention may waver if a job is relatively mundane.",
            3: "Able to concentrate and stay focused for short periods of up to an hour but tends to drift after this if not presented with a new task.",
            2: "Is able to focus on a job and concentrate if interested in the task, but easily distracted and usually unfocused if unchallenged.",
            1: "In all situations " + firstName + " finds it difficult to focus on the task in hand. Low boredom threshold.",
            0: "The levels of concentration displayed by " + firstName + " are compared to the levels of an autistic kid... on LSD... with a caffeine overdose. "
        },
        "confidence": {
            5: "Always assured and confident in demeanour and presentation of ideas without being aggressively over-confident.",
            4: "Appears confident with familiar situations and people, but still sometimes nervous or over-confident when in an unfamiliar context.",
            3: "Uncertain of capabilities and needing frequent reassurance. Or over-confident and sometimes overbearing.",
            2: "Timid in relationships and new situations – or aggressively over-confident.",
            1: "Unsuited for contact with other people because of chronic fear of new situations. Or someone whose surly aggression drives others away.",
            0: "The exagerated levels of cofidence displayed by " + firstName + " are only balanced by the emptyness of " + possessive + " mind."
        },
        "courage": {
            0: "" + firstName + " refuses to do anything that might involve cognitive skills. The refusal might be due to the lack of brain.",
            5: "" + firstName + " is willing to face physical risks and danger, and appears to do so without fear. Sets an example of bravery that inspires others.",
            4: "May not always appear to be the bravest, but is nevertheless ready to take on tasks that involve physical risk and danger.",
            3: "Somewhat nervous about taking on tasks that involve physical risk and danger, but prepared to participate provided others do too.",
            2: "" + pronounCaps + " is reluctant to do anything that might involve physical risk or danger.",
            1: "" + firstName + " refuses to do anything that might involve physical risk or danger – and sees danger at every turn."
        },
        "courtesy": {
            5: "Polite, courteous, respectful and charming at all times and in all situations, without being obsequious. Unfailingly courteous even when dealing with a difficult person or situation.",
            4: "Generally polite, courteous and respectful, though may sometimes lose a little control when confronted with a difficult person or situation. Or perhaps sometimes seems over-polite.",
            3: "" + firstName + " can be polite, respectful and courteous on occasions and with certain people, but is not by nature polite, and has upset someone once or twice in the last six months – inside the business or outside – with a lack of respect.",
            2: "" + firstName + " is not someone you would choose to put on show when politeness is called for. " + pronounCaps + " has rough edges and may sometimes be considered abrasive.",
            1: "Impolite, ill-mannered and brusque. Sometimes others might find it amusing, but there have been several occasions in the last six months when colleagues or customers have been upset by " + possessive + " lack of politeness and respect.",
            0: "Due to " + firstName + " actions, the female employees next door may or may not be submitting a restraining order soon™."
        },
        "creativity": {
            5: "Regularly produces creative, original ideas, plans, products or methods, well-attuned to the needs and capabilities of the organization, and producing clear benefits.",
            4: "Has proven ability to produce creative, original ideas, plans, products or methods,even if they’re not always practical, in line with organization needs, or successful.",
            3: "Has produced several plans, ideas, products and methods in the last six months. But generally they’ve been more of the same – not bursting with freshness and originality.",
            2: "Has occasionally made a suggestion or come up with an idea in the past six months, but creativity is not a strong point.",
            1: "Has not produced a new idea, plan, product or method in the past six months.",
            0: "Has not produced a new idea, plan, product, method or rational thought in the past six months."
        },
        "crisis": {
            5: "Reacts quickly and decisively in an emergency, keeping a cool head and effectively leading others.",
            4: "Is a good team member in an emergency, following instructions quickly, but not taking a leadership role.",
            3: "Stays cool in an emergency, but needs help from others to take the right action quickly.",
            2: "Fails to react quickly enough in an emergency, but doesn’t usually panic.",
            1: "Panics and gets flustered when an emergency arises.",
            0: "When the subject sees work coming " + possessive + " way, " + pronoun + " proceeds to threaten others with a resignation letter (we hope it becomes reality)."
        },
        "decision": {
            5: "Reaches a decision rapidly after taking account of all likely outcomes and estimating the route most likely to bring success. The decisions almost always turn out to be good ones.",
            4: "Makes decisions rapidly and well when dealing with small or personal matters, but still has to gain the confidence to make major decisions. Most of the decisions made turn out to be effective.",
            3: "Is usually decisive, but too often fails to take account of all possibilities, and this has caused a few problems in the past 6 months. Or takes account of all possibilities but takes too long to reach the final decision.",
            2: "Slow in reaching decisions and fails to take account of all possible outcomes, and this has caused potentially serious problems in the past 6 months. Or prefers others to take decisions.",
            1: "Always indecisive and muddled – incapable of reaching a firm decision, and this has created serious problems in the past 6 months. Leaves the responsibility for decision making to others … and should probably continue to do so.",
            0: "Leaves the responsibility for decision making to others … and should probably continue to do so.",
        },
        "delegation": {
            0: "Delegates everything to others because " + pronoun + " loves other people empowerment, even " + possessive + " cognitive abilities seem to be provided by others.",
            5: "Does not shirk duties, but always instigates and encourages load-sharing with other members of the team, resulting in strong group output. Consistently plans and monitors the work of team-members.",
            4: "Does not shirk duties, and can share the workload with other people in the team to achieve maximum group output – but does not do so consistently. Good at planning and monitoring the work of team-members.",
            3: "Does not shirk duties, and can share the workload with other people in the team to achieve maximum group output – but does not do so consistently. Not good at planning and monitoring the work of team-members.",
            2: "Only occasionally shares the work with other team members, and not good at planning or supervising their work. Or passes most of the work to the team and doesn’t get fully involved or lead.",
            1: "Refuses to entrust work to others in the team and always tries to do everything alone – nobody else is empowered. Or passes the whole job to the team and takes no part at all."
        },
        "determination": {
            5: "Responds to setbacks or adversity with redoubled vigour and enthusiasm. Will never accept that defeat is a foregone conclusion, and inspires others to stay positive and fight on.",
            4: "In the face of setbacks or adversity will continue to pursue the objective, and doesn’t give up. But may not be able to inspire others to continue as well.",
            3: "In the face of setbacks or adversity will wait to see how others respond before continuing. Will continue to pursue the objective as long as others lead the way. but will give up otherwise.",
            2: "When there are setbacks or adversity, will soon start to question the objectives and will only continue the challenge after persuasion and reassurance from a leader.",
            1: "Gives up and accepts defeat after even a minor setback. Lowers the morale of all around.",
            0: "Gives up and accepts defeat after even a minor setback, being a minor setback a simple foreach loop."
        },
        "dexterity": {
            5: "Has a natural flair for jobs involving the use of the hands or hand-tools. Able to cope expertly with intricate detail.",
            4: "Carries out jobs requiring the use of the hands or hand-tools well, but is not yet a master craftsman.",
            3: "Uses the hands or hand-tools reasonably well, but has not not yet achieved fully mastery and control, and still struggles with detail and new processes.",
            2: "Tries to work with the hands or hand-tools, but is still a novice and generally does not achieve good results.",
            1: "Clumsy in jobs involving the hands or hand-tools, and produces work that’s consistently poor.",
            0: "Does not produces work that’s consistently poor, that is because work is not produced at all."
        },
        "diplomacy": {
            5: "A skillful negotiator, who instinctively reads a situation correctly, understands the motivations and feelings of the other party, and chooses the right time to proceed or withdraw.",
            4: "A good negotiator, who usually chooses the right time to proceed or withdraw in a negotiation after reading the situation correctly. But not yet infallible and may need more experience.",
            3: "In negotiations, is generally aware of the motivations and feelings of the other party, but prone to an occasional blunder, which has prevented a successful outcome and may have soured a relationship.",
            2: "Not sufficiently aware of the motivations and feelings of others, and this has frequently caused negotiations to break down.",
            1: "Constantly ignores the motivations and feelings of others, and is totally unsuited for sensitive negotiations.",
            0: "Constantly ignores the motivations and feelings of others, and is totally unsuited for sensitive negotiations."
        },
        "discretion": {
            5: "Understands the importance of confidentiality, and can always be trusted not to reveal confidential or private information to unauthorized parties.",
            4: "Has proved to be trustworthy, but has not yet been given access to material of a highly confidential or sensitive nature.",
            3: "Is somewhat casual with sensitive or confidential information, and may speak too freely to others.",
            2: "Too talkative about matters that are confidential or sensitive, but has not given away secrets that could cause damage.",
            1: "Does not understand the importance of confidentiality and has given away private or sensitive information that can potentially damage a business or an individual.",
            0: "Does not understand the importance of confidentiality, but that is no problem because in order to give away private information you must understand it first."
        },
        "enthusiasm": {
            5: "Always eager to take on a new task, whether hard or simple, and tackles it diligently, without question or complaint. This positive attitude inspires others too.",
            4: "Usually eager to work, but on one or two occasions has been less than willing to tackle an assignment within the range of competence, or reluctant to learn something new.",
            3: "Generally takes on tasks or assignments without objection, but does not appear to be strongly motivated, and will not inspire others.",
            2: "Has often questioned the validity of tasks or assignments within the range of competence without suggesting a better alternative, or has carried them out with obvious reluctance.",
            1: "Responds badly to instructions and will not carry out a task or assignment unless it is demanded. Likely to demotivate others.",
            0: "Responds badly to instructions and will not carry out a task or assignment unless it is demanded. Likely to demotivate others."
        },
        "flexibility": {
            5: "" + pronounCaps + " will always willingly and successfully try to do what is required, even if it means performing tasks that are not in the job description or if required to do extra work unexpectedly.",
            4: "" + pronounCaps + " will always try to do what is required, even if it means performing tasks that are not in the job description or if required to do extra work unexpectedly. However, may sometimes complain about the extra load.",
            3: "" + pronounCaps + " will only grudgingly perform tasks that are outside the job description or which require extra work. However, these additional tasks are usually carried out successfully.",
            2: "" + firstName + " may try to do tasks outside the job description or requiring extra work, but outcomes are usually not successful – success is limited to the normal daily job.",
            1: "" + firstName + " refuses to carry out tasks outside the job description or requiring extra work.",
           0: "" + firstName + " refuses to carry out tasks outside the job description or requiring extra work, or even the tasks inside the description for that matter."
        },
        "instructions": {
            5: "Always follows instructions precisely and completely. However, when meeting a situation outside the rules, " + pronoun + " knows exactly how to act in an appropriate manner. " + firstName + " is careful to understand the instructions before starting.",
            4: "Follows instructions well, but has a tendency to be too literal, and can be lost unless there are firm guidelines. Or sometimes may not take sufficient care to check the instructions before starting.",
            3: "Tries to follow instructions but can sometimes miss a step or misinterpret what is required.",
            2: "Does not follow instructions well. " + pronounCaps + " misses out steps and does not check thoroughly enough.",
            1: "Pays no heed to instructions, preferring to set " + personalPronoun + " own agenda.",
            0: "Pays no heed to instructions, preferring to set " + personalPronoun + " own agenda."
        },
        "hygiene": {
            5: "Physically fit, very rarely sick, and able to meet the demands of a physically demanding job.",
            4: "Normally physically fit but has suffered from injury or sickness in the recent past. No problem predicted with physically demanding jobs in the future.",
            3: "Question-marks over physical fitness and may not be ready at this time for a physically demanding job.",
            2: "Probably unsuited to a physically demanding job – lacking strength and fitness.",
            1: "Frailty or repeated injury or sickness makes this person completely unsuited for a physically demanding job.",
            0: "Very clean individual, it even changes clothes without timeout (this activity may or may not occur inside the office space)."
        },
        "initiative": {
            5: "A self-starter – someone who always finds out the right thing to do and gets on with the job. If a manager has given no guidance " + firstName + " will still take appropriate action. If the required tools are unavailable, " + pronoun + " is able to improvise.",
            4: "" + firstName + " always gets on with the job after being given clear parameters. Generally able to come up with " + pronoun + " own ideas when help is not available, but may be still lacking the self-confidence to trust own judgment.",
            3: "Needs a supervisor to give instructions, but after receiving them gets on with the job. However, sometimes needs to come back and ask for more guidance.",
            2: "Will rarely start a job unless instructed to do so, and rarely has " + possessive + " own ideas.",
            1: "Will never start a job unless instructed to do so, and never offers " + possessive + " own ideas.",
            0: "Will never start a job unless instructed to do so, and even then it's a gargantuan task."
        },
        "investigative": {
            5: "Habitually asks questions in order to fully understand a position or a statement. Keeps asking until the facts are clear and the truth is understood.",
            4: "" + firstName + " is interested in finding out why things are the way they are. Asks questions, but may stop if not getting the answers quickly or easily enough.",
            3: "Interested in learning about other people and the world, but tends to let others ask the questions and find the answers.",
            2: "Not very interested in the world around. " + pronounCaps + " will occasionally show interest and ask a few questions, but generally only in an area related to personal interests.",
            1: "Not at all interested in the world beyond self, or digging below the surface. " + pronounCaps + " takes everything at face value and accepts the status quo without question.",
            0: "Not at all interested in the world beyond self, or digging below the surface. " + pronounCaps + " takes everything at face value and accepts the status quo without question."
        },
        "judgement": {
            5: "Applies professional experience and/or knowledge of people expertly to forecast outcomes with at least 90% accuracy. Others trust " + possessive + " judgement because the choices have usually been good.",
            4: "Applies professional experience and/or knowledge of people well to forecast outcomes with at least 75% accuracy.",
            3: "Applies professional experience and/or knowledge of people reasonably well to forecast outcomes with at least 60% accuracy.",
            2: "Forecasts are more usually wrong than right because " + firstName + " judges people poorly and fails to apply professional experience.",
            1: "" + firstName + " is unable to apply professional experience and/or knowledge of people to forecast outcomes with any degree of accuracy. " + possessiveCaps + " forecasts are correct less than 30% of the time.",
            0: "" + firstName + " is unable to apply professional experience and/or knowledge of people to forecast outcomes with any degree of accuracy. " + possessiveCaps + " forecasts are incorrect 110% of the time."
        },
        "leadership": {
            5: "A natural leader. People tend to listen and follow " + possessive + " example and guidance. " + firstName + " is chosen as leader without making an issue of leadership.",
            4: "Works well in association with another leader. A good number 2, commanding the respect of a team.",
            3: "" + firstName + " has some leadership qualities, but sometimes upsets people in the team by being over-assertive. Or still reluctant to take the lead.",
            2: "" + firstName + " has some leadership qualities, but often upsets people in the team by being over-assertive. Not a popular leader.",
            1: "Shows no inclination to lead, or tries to lead but completely fails to win the respect and support of the team.",
            0: "Shows no inclination to lead, or tries to lead but completely fails to win the respect and support of the team."
        },
        "literacy": {
            5: "" + firstName + " has a flair for creative, original writing and makes an impact on the reader. Can adapt the style to the purpose. Never makes mistakes with grammar, spelling or style.",
            4: "{pronounCaps} is a competent writer who reliably produces professional business correspondence and reports free of spelling, grammar and structural mistakes.",
            3: "With a supervisor checking for occasional spelling, grammar and style errors, " + firstName + " can produce business correspondence and reports of acceptable quality.",
            2: "Writes well enough to produce internal reports and correspondence, but makes too many mistakes to write to customers or external business contacts.",
            1: "A poor writer, unable to write coherent business reports or correspondence, even for internal use.",
            0: "A poor writer, unable to write coherent business reports, correspondence, or it's own name for that matter."
        },
        "deadlines": {
            5: "When working to a firm but realistic deadline, " + firstName + " always completes tasks to a high standard. Care and accuracy is obvious even when put under pressure of time. Prepared to work all the extra hours it takes to meet the deadline.",
            4: "When working to a firm but realistic deadline, " + firstName + " always completes tasks to an adequate standard. Accuracy and neatness may suffer but the outcome is acceptable. Puts in some extra hours to meet the deadline.",
            3: "When working to a firm but realistic deadline, " + firstName + " sometimes fails to complete the task because unprepared to work extra hours to meet the deadline. Or completes the task, but with some serious flaws.",
            2: "When working to a firm but realistic deadline, " + firstName + " usually fails to complete the task and refuses to put in the extra hours or effort required for completion.",
            1: "Very slow and incapable of meeting deadlines and completing work in a reasonable period of time.",
            0: "Very fast and capable of meeting deadlines (warning: the work may or may not have been started)."
        },
        "mental": {
            5: "Intellectually versatile. When a topic is unfamiliar or new concepts are put forward, " + firstName + " listens, learns and adjusts quickly, and is soon making a full and useful contribution to the conversation.",
            4: "Smart, and not afraid of unfamiliar topics and new concepts, and shows a good ability to learn and adapt. But it usually takes a session or two before " + firstName + " will engage in the discussion.",
            3: "When a topic is unfamiliar or new concepts are put forward, " + firstName + " engages in the conversation, but contributions show a lack of understanding at first. Needs to make more effort to listen, learn and adjust.",
            2: "" + firstName + " makes an effort to take on board new ideas and concepts, but slow to catch on and needs lots of explanation and help.",
            1: "Steers clear of anything intellectually demanding. Not at all interested in dealing with unfamiliar ideas and concepts.",
            0: "Steers clear of anything intellectually demanding (p.s.: the demanding threshold is set at 'drinking water without drowning')"
        },
        "negotiation": {
            5: "Silver-tongued, and usually successful when trying to persuade others to move from their original position towards or beyond compromise. Using personality, logic, persistence, " + firstName + " always manages to get the best deal.",
            4: "Always looking for the opportunity to negotiate and often successful in getting a good deal. But sometimes " + firstName + " fails to press home the advantage, and doesn't get the best deal possible.",
            3: "Sometimes " + firstName + "  needs to be reminded to negotiate, but then does so reasonably well, and sometimes manages to get others to change their position and get a good deal.",
            2: "" + firstName + " usually forgets to negotiate and accepts the other party's position. " + pronounCaps + " has had occasional success in getting a good deal.",
            1: "" + firstName + " hates negotiation and leaves it up to others to fight for the best deal.",
            0: "" + firstName + " loves negotiation and always gets the best deal for the soccer tickets."
        },
        "numeracy": {
            5: "Fast and accurate at solving mental math problems and has high-level skills requiring complex calculation and analysis.",
            4: "Fast and accurate at solving mental math problems involving addition, subtraction, multiplication, division and percentages – but without high-level skills that might be required in jobs requiring complex calculation and analysis.",
            3: "Accurate at solving mental math problems involving addition, subtraction, multiplication, division and percentages – but without a calculator, cannot reach the answer at speed.",
            2: "Sometimes makes mistakes in dealing with basic mental math problems – and cannot work at speed.",
            1: "Numerically illiterate. Regularly makes mistakes with basic mental math calculations.",
            0: "Numerically illiterate. Regularly makes mistakes with basic mental math calculations."
        },
        "organization": {
            5: "Prioritizes and sequences own tasks and those of other people in the team. Makes sure that the priority tasks are always completed on time.",
            4: "Good at organizing own work and usually finishes priority tasks on time, but there is less evidence of organizing the work of the team.",
            3: "" + firstName + " does the right things at the right time when instructed. But without instruction, sometimes " + pronoun + " fails to spot the priorities and sometimes completes work late.",
            2: "Needs lots of help to organize work. and even then sometimes " + firstName + " focuses on the wrong thing and frequently completes work late.",
            1: "Always carries out duties haphazardly, without regard to priority or sequence. " + pronounCaps + " is often found to be spending too long on the wrong thing, and frequently completes assignments late.",
            0: "Always carries out duties haphazardly, without regard to priority or sequence. " + pronounCaps + " is often found to be spending too long on the wrong thing, and frequently completes assignments late."
        },
        "personal": {
            5: "When dressed for the job, personal appearance and dress immediately impress. Distinctive, perhaps distinguished.",
            4: "When dressed for the job, personal appearance and dress don’t stand out, but this person is always neat and tidy.",
            3: "Not especially neat and tidy, but adequate for the job.",
            2: "Some aspects of personal appearance may be off-putting to people encountered in the job.",
            1: "Appearance and dress are totally unsuitable for the job.",
            0: "When dressed for the job, personal appearance and dress immediately impress. Distinctive, perhaps distinguished.",
        },
        "personality": {
            5: "A pleasant, outgoing personality who always gets on well with others. " + firstName + " will always be noticed and popular in a group.",
            4: "Easy-going, relaxed, always welcome in a group – though not the strongest personality.",
            3: "" + firstName + " willingly joins groups, but tends to remain anonymous.",
            2: "" + firstName + " prefers own company to that of other people.",
            1: "Aggressive and difficult. " + firstName + " regularly takes issue with colleagues and is not popular.",
            0: "Very popular individual, as seen in the 'Despicable Me' movies."
        },
        "physical": {
            5: "" + firstName + " has a powerful physique, suited for heavyweight jobs, or situations when it’s an advantage to appear strong.",
            4: "Not necessarily a powerful build, but someone who is capable of taking on heavy, physically demanding jobs.",
            3: "Of average build. " + firstName + " is ready to contribute to heavy or physical jobs, but needs help from people better equipped.",
            2: "Below average build – and reluctant to get involved in physically demanding jobs, even as part of a team.",
            1: "Fragile in build – entirely unsuited for jobs where strength or physical presence is required.",
            0: "Robust in build - looks like a cement block, brain and everything, cement."
        },
        "planning": {
            5: "" + firstName + " habitually plans and sequences own work and that of others. Ensures that objectives are clearly established, and that work is systematically carried out in order to achieve the objectives. Communicates plans clearly to others.",
            4: "" + firstName + " habitually plans and sequences own work but not that of others. Ensures that objectives are clearly established, and that work is systematically carried out in order to achieve the objectives.",
            3: "" + firstName + " is capable of planning and sequencing own work, but does not yet do so consistently. When work is planned, usually works systematically towards objectives.",
            2: "" + firstName + " prefers to carry out jobs without thinking them through and tackles tasks as they come to mind. Is capable of writing a plan when required to do so, but tends to drift away from the planned activity.",
            1: "Incapable of planning a job and always reacts spontaneously. Any plans written are badly structured and not followed.",
            0: "Incapable of planning a job and always reacts spontaneously. Any plans written are badly structured and not followed."
        },
        "presentation": {
            5: "" + firstName + " enjoys public speaking, and is very well received by audiences. Eloquent, clear, persuasive, interesting, always captures the interest and fires the imagination of listeners. Comfortable in any situation, even when speaking unprepared and without notes.",
            4: "A persuasive, engaging speaker when well-prepared, but uncomfortable and less effective when asked to speak off-the-cuff.",
            3: "" + firstName + " can hold and engage an audience, but not convincing or persuasive enough to be used as a keynote speaker/presenter.",
            2: "Struggles with public speaking. Not fluent or persuasive, and " + firstName + " finds it difficult to hold the interest of an audience, who have a lukewarm response.",
            1: "Completely unsuited for public speaking. Nervous, loses track of topic, and unstructured, " + firstName + " fails to engage with audience.",
            0: "Completely suited for public speaking. Calm, always loses track of topic, " + firstName + " always delivers the best kind of bullshit."
        },
        "pressure": {
            5: "" + firstName + " responds well when put under pressure – and accepts that pressure is a regular part of the job.",
            4: "" + firstName + " responds well when put under pressure – but prefers not to be pressurized all the time.",
            3: "" + firstName + " copes with short periods of pressure, but the quality of work and level of enthusiasm begin to decline if the pressure continues for a longer period.",
            2: "" + firstName + " is resentful of pressure or quickly loses enthusiasm in a pressure situation.",
            1: "" + firstName + " collapses quickly under pressure and produces very poor work – or none at all.",
            0: "" + firstName + " collapses quickly under pressure and produces very poor work – or none at all."
        },
        "pride": {
            5: "In all aspects of work, " + firstName + " is not satisfied unless achieving the highest standards. Works relentlessly to improve skills and knowledge, and the quality of work output.",
            4: "Performs most jobs well and has the habit of checking work outcomes. " + firstName + " is achieving excellence in some areas but in others is not yet achieving the highest standards.",
            3: "Performs to an adequate standard but is not yet achieving excellence in any area. " + firstName + " generally checks work to make sure it has been done properly.",
            2: "Performs mostly to an adequate standard but does not check work. " + firstName + " is not likely to achieve excellence.",
            1: "Work performance is at an inadequate level and " + firstName + " is taking no steps to improve. " + pronounCaps + " does not check work and has no sense of pride in performance.",
            0: "Work performance is at an inadequate level and " + firstName + " is taking no steps to improve. " + pronounCaps + " does not check work and has no sense of pride in performance."
        },
        "problem": {
            5: "Considers problems as a challenge and enjoys finding creative yet appropriate solutions. " + firstName + " is able to work out " + possessive + " own solutions, but also works well with a group to solve problems.",
            4: "" + firstName + " likes to work with problems and enjoys problem-solving sessions. " + pronounCaps + " presents ideas and solutions but these are sometimes limited or unworkable.",
            3: "" + firstName + " has " + possessive + " own ideas when faced with a problem, but is reluctant to implement them unless others are supportive. Cautious with original ideas.",
            2: "Relies entirely on other people’s ideas when faced with a problem. " + pronounCaps + " will willingly implement their ideas, but " + firstName + " cannot think of solutions if working alone.",
            1: "" + firstName + " hates problems and will do everything possible to avoid them. Reacts negatively and pessimistically in the face of problems and is unable to deal with the situation, even when supported by others.",
            0: "" + firstName + " hates problems and will do everything possible to avoid them. Reacts negatively and pessimistically in the face of problems and is unable to deal with the situation, even when supported by others."
        },
        "punctuality": {
            5: "Late on fewer than 3 occasions in 6 months.",
            4: "Late on more than 3 but fewer than 5 occasions in 6 months.",
            3: "Late on more than 5 but fewer than 8 occasions in 6 months.",
            2: "Late on more than 8 but fewer than 10 occasions in 6 months.",
            1: "Late on more than 10 occasions in 6 months.",
            1: "Late on more than 10^∞ occasions in the past 6 months."
        },
        "criticism": {
            5: "" + firstName + " accepts criticism cheerfully, and uses criticism productively to develop own abilities and skills.",
            4: "" + firstName + " takes criticism seriously and tries to learn from it, though can sometimes be a little defensive.",
            3: "Usually defensive when efforts are criticised – but " + pronoun + " nevertheless tries to learn from mistakes.",
            2: "" + firstName + " is always defensive when others criticize – but nevertheless tries to learn from mistakes.",
            1: "" + firstName + " becomes resentful when others criticize. Does not learn from criticism and carries on behaving exactly as before.",
            0: "" + firstName + " becomes resentful when others criticize. Does not learn from criticism and carries on behaving exactly as before."
        },
        "teamwork": {
            5: "Always contributes vigorously to the efforts of the team, whether as a leader or a team member. Understands own weaknesses ond others’ strengths and goes to the right people for help. Sympathetically helps others to address their weaknesses.",
            4: "Works willingly in a team and tolerant of others, no matter what their strengths and weaknesses. But does not always make a strong contribution.",
            3: "Works willingly in a team and tolerant of others, no matter what their strengths and weaknesses. But tends to rely mostly on the contributions of others, and makes only a limited contribution.",
            2: "Can work in a team but often produces individual work at the end of a group activity. Not supportive or tolerant of others in the team.",
            1: "Strongly individualistic and will not work with other people.",
            0: "Always contributes vigorously to the efforts of the team, delegating all the work assigned to "+personalPronoun+", 10/10 teamplayer."
        },
        "unsupervised": {
            5: "" + firstName + " enjoys working without supervision and always continues to carry out duties effectively. But also knows when a supervisor’s advice or authority is required, and seeks help at the appropriate time.",
            4: "" + firstName + " enjoys working without supervision and usually continues to carry out duties effectively. Still needs to learn when it is appropriate to call for a supervisor’s advice or authority to act.",
            3: "" + firstName + " still needs to learn the job better and required supervisor's assistance regularly. Provided supervisor help is close at hand, performs the job well.",
            2: "" + firstName + " does a poor job when unsupervised and standards fall below the required level.",
            1: "" + firstName + " is incapable of doing the job at all without almost constant supervision.",
            0: "" + firstName + " is incapable of doing the job at all without constant supervision."
        }
    };

    return attributeText[type][level];
};

module.exports = {
    generate: generate
}