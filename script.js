const medaid_pro3 = {
    "Project": "Oncology Infomation System (OIS) <small class='float-right mr-1'><i><a href='http://prowess.com/products/panther-ois/' target='_blank' class='d-print-none'>About Product</a></i></small>",
    "Description": "<p>Import, export DICOM file. Store radiotherapy treamtment plan of patient: eg beam, control points. Store testings of patient include image CT, MRI. Support doctor to view plan, view image. Send plan (DICOM file) to RV.</p>",
    "Platform": "<i>Frontend is Angular 6+, Silmusoft Report, run on engine Electron like Desktop app</i><br><i>Backend is Restfull API .Net Framework 4.6.1 c#, Entity Framework</i><br><i>Database is SQL server 2017</i>",
    "Tool": "Visual Code, Visual studio 2019, Sql management tool",
    "TeamSize": "Include 5 developers, 2 QAs and 1 PM",
    "Position": "Developer, from Aug 2018 to current"
}

const medaid_pro2 = {
    "Project": "Review & Verify (RV)",
    "Description": "<p>Receive radiotherapy treatment plan of patient from OIS (DICOM file and Restful API), send the plan to Control Console (via Restful API of Control Console). Support doctor to deliver the plan and receive record treatment from Control Console, send record treatment comeback OIS.</p>",
    "Platform": "<i>Winform c# call Restful API of Control Console</i>",
    "Tool": "Visual studio 2019",
    "TeamSize": "Include 3 developers",
    "Position": "Developer, from Jan 2021 to Arp 2021"
}

const medaid_pro1 = {
    "Project": "Electronic medical records (EMR)",
    "Description": "<p>Store diagnosis of patient, store consultant minutes of patient, store testings of patient include image CT, MRI, Pikka result. Support doctor to view and print report.</p>",
    "Platform": "<i>Frontend is silverlight WPF (xaml file) c#</i><br><i>Backend is WCF window service c#, Entity Framework</i><br><i>Database is SQL server</i>",
    "Tool": "Visual studio 2010 to code silverlight, Visual studio 2017 for backend, Sql management tool",
    "TeamSize": "Include 3 developers and 3 QAs",
    "Position": "Developer, from Dec 2017 to Jun 2018"
}

// For An Binh Bank
const anBinh_pro3 = {
    "Project": "Exception for loan amount",
    "Description": "<p>Web app to support department credit manage exceptions of loan amount. Process: employee send loan contract out of policy common of bank, manager review and approve the contract or comment to staff edit.</p>",
    "Platform": "<i>Web form ASP.NET c#, Entity Framework</i><br><i>Database is SQL server</i>",
    "Tool": "Visual studio 2013, Sql management tool",
    "TeamSize": "Include 2 developers",
    "Position": "Developer, from Jan 2017 to Apr 2017"
}

const anBinh_pro2 = {
    "Project": "VIP Customer",
    "Description": "<p>Import data from core software when start day, calculate scores for customer based on volume trading of them. Support manager to build bonus customer policy.</p>",
    "Platform": "<i>Web form ASP.NET c#, ADO.NET</i><br><i>Database is SQL server</i>",
    "Tool": "Visual studio 2010, Sql management tool",
    "TeamSize": "Only me",
    "Position": "Developer, from Jan 2016 to Feb 2016"
}

const anBinh_pro1 = {
    "Project": "Key Performance Indicator (KPI)",
    "Description": "<p>Import data from core software when start day, calculate KPI for credit employee. Support manager build bonus staff policy. Export report to excel, html and auto send report daily to CEO.</p>",
    "Platform": "<i>Web form ASP.NET c#, ADO.NET</i><br><i>Database is SQL Oracle 12c</i>",
    "Tool": "Visual studio 2010, Toad",
    "TeamSize": "Include 2 developers",
    "Position": "Developer, from Aug 2015 to Nov 2017"
}

// For Goline
const goline_pro2 = {
    "Project": "VGaia Back office, outsourcing for Gaia Japan",
    "Description": "<p>Desktop app to support employee of stock company resolve following business: order securities, margin, advance, mortgage...</p>",
    "Platform": "<i>Frontend is java swing</i><br><i>Backend is a service writen by java, Crystal Report</i><br><i>Database is Oracle</i>",
    "Tool": "Eclipse, Toad",
    "TeamSize": "Include 7 developers and 4 QAs",
    "Position": "Developer, from Jan 2013 to Jun 2014"
}

const goline_pro1 = {
    "Project": "Dolphin Back office",
    "Description": "<p>Desktop app to support employee of stock company resolve following business: order securities, margin, advance, mortgage...</p>",
    "Platform": "<i>Frontend is Winform c#, Crystal Report</i><br><i>Backend is web service ASP.NET c#, ADO.NET</i><br><i>Database is SQL server</i>",
    "Tool": "Visual studio 2010, Sql management tool",
    "TeamSize": "Include 3 developers and 3 QAs",
    "Position": "Developer, from Mar 2012 to Feb 2015"
}

// For BKAV
const goline_bkav = {
    "Project": "Human Resource Management System",
    "Description": "<p>Overall management of human resources, with the highest customization ability, to meet the scale from Groups, Corporations to small and medium enterprises.</p>",
    "Platform": "<i>ASP.NET MVC c#</i><br><i>Database is SQL server</i>",
    "Tool": "Visual Studio 2010, Sql management tool, Microsoft word, UML tool Rational Rose",
    "TeamSize": "Include 6 developers",
    "Position": "Developer, write document design analysis and code from Mar 2011 to Feb 2012"
}

function bodyOnload() {
    let now = new Date();
    document.getElementById('age').innerHTML = now.getFullYear() - 1988;

    // Load data for Med Aid
    let projectsAtMedAid = [medaid_pro3, medaid_pro2, medaid_pro1];
    const projectSample = document.getElementById('project_sample').outerHTML;
    const fn = obj => {
        let ret = projectSample;
        Object.keys(obj).forEach(function(key) {
            ret = ret.replace(`@${key}`, obj[key]);
        });
        return ret.replace('project_sample', '');
    }

    let ret = '';
    projectsAtMedAid.forEach(x => ret += fn(x));
    document.getElementById('projects_medaid').innerHTML = ret;

    // Load data for An Binh
    ret = '';
    let projectsAtAnBinh = [anBinh_pro3, anBinh_pro2, anBinh_pro1];
    projectsAtAnBinh.forEach(x => ret += fn(x));
    document.getElementById('projects_anbinh').innerHTML = ret;

    // Load data for Goline
    ret = '';
    let projectsAtGoline = [goline_pro2, goline_pro1];
    projectsAtGoline.forEach(x => ret += fn(x));
    document.getElementById('projects_goline').innerHTML = ret;

    // Load data for BKAV
    document.getElementById('projects_bkav').innerHTML = fn(goline_bkav);

    setTimeout(() => {
        const loadImgs = document.getElementsByClassName('load-img-async');
        if (loadImgs && loadImgs.length > 0) {
            for (const x of loadImgs) {
                x.setAttribute('src', x.getAttribute('data-src'));
            }
        }

        if ('loading' in HTMLImageElement.prototype) {
            // Browser supports `loading`..
            medAidAward.src = medAidAward.getAttribute("data-src")
            anbinhAward.src = anbinhAward.getAttribute("data-src")
        } else {
            // Fetch and apply a polyfill/JavaScript library
            // for lazy-loading instead.
            console.log('Not suport lazy-loading');
        }
    }, 10);

    bindHtml(summaryExp);
}

function viewAward(id) {
    id01.style.visibility = 'visible'
    const el = document.getElementById(id)
    el.src = el.getAttribute("data-src")
    el.style.visibility = 'visible'
    el.style.display = 'block'
    if (window.innerHeight < el.offsetHeight) {
        if (!el.originH) {
            el.originH = el.offsetHeight
            el.originW = el.offsetWidth
        }
        const rate = (window.innerHeight - 20) / el.offsetHeight
        const newW = rate * el.originH
        const newH = rate * el.originW
        el.style.height = `${newW}px`
        el.style.width = `${newH}px`
    } else if (el.originH && window.innerHeight > el.originH) {
        el.style.height = `${el.originH}px`
        el.style.width = `${el.originW}px`
    }
    id01Content.style.width = el.offsetWidth + 'px'
    const top = (window.innerHeight - el.offsetHeight) / 2
    const left = (window.innerWidth - el.offsetWidth) / 2
    id01Content.style.top = top + 'px'
    id01Content.style.left = left + 'px'
    const images = id01.querySelectorAll('.img-fluid')
    for (const item of images) {
        if (item != el)
            item.style.display = 'none'
    }
}

/**
 * Bind html form file source to element target
 * @param {*} elTarge element target
 * @param {*} fileSource name of file source 
 * @returns void
 */
function bindHtml(elTarget, fileSource) {
    if (!fileSource) return bindHtml(elTarget, elTarget.getAttribute('src-html'));
    /*make an HTTP request using the attribute value as the file name:*/
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                elTarget.innerHTML = this.responseText;
                elTarget.classList.remove("d-none");
            }
            if (this.status == 404) { elTarget.innerHTML = "Page not found."; }
        }
    }
    xhttp.open("GET", fileSource, true);
    xhttp.send();
}

function onScroll() {
    if ((window.scrollY + window.innerHeight) / document.body.offsetHeight >= 0.8) {
        medAidAward.src = medAidAward.getAttribute("data-src")
        anbinhAward.src = anbinhAward.getAttribute("data-src")
        window.removeEventListener('scroll', onScroll)
    }
}
window.addEventListener('scroll', onScroll);

function closeModal() {
    id01.style.visibility = 'hidden'
    id01Content.style.width = ''
    const images = id01.querySelectorAll('.img-fluid')
    for (const item of images) {
        item.style.visibility = 'hidden'
        item.style.display = 'none'
    }
}

function toggleSumExp() {
    if (!summaryExp.style.display || summaryExp.style.display == 'none') {
        summaryExp.style.display = 'block'
        summaryExp.style.position = 'absolute'
        const right = (window.innerWidth - mainiDiv.offsetWidth) / 2 + 10
        summaryExp.style.right = `${right}px`
        summaryExp.style.top = '1.7em'
        summaryExp.style['box-shadow'] = '2px 2px 2px 2px #888'
        aSummaryExp.innerHTML = 'Hide summary experience'
    } else {
        summaryExp.style.display = 'none'
        aSummaryExp.innerHTML = 'Show summary experience'
    }
}

window.addEventListener('resize', () => {
    summaryExp.style.display = 'none'
});