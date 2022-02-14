const medaid_pro3 = {
    "Project": "Oncology Infomation System (OIS)",
    "Description": "<p>Import, export DICOM file. Store ratheory treamtment plan of patient: eg beam, control points, store testings of patient include image CT, MRI. Support doctor view plan, view image, send plan to RV.</p>",
    "Platform": "<i>Frontend is Angular 6+</i><br><i>Backend is Restfull API .Net Framework 4.6.1 c#, Entity Framework</i><br><i>Database is SQL server 2017</i>",
    "Tool": "Visual Code, Visual studio 2019, Sql management tool",
    "TeamSize": "Include 5 developers, 2 QAs and 1 PM",
    "Position": "Developer, from Aug 2018 to current"
}

const medaid_pro2 = {
    "Project": "Review & Verify (RV)",
    "Description": "<p>Store diagnosis of patient, store consultant minutes of patient, store testings of patient include image CT, MRI, Pikka result. Support doctor view and print report.</p>",
    "Platform": "<i>Frontend is silverlight WPF (xaml file) c# call Restful API of Control Console</i>",
    "Tool": "Visual studio 2019",
    "TeamSize": "Include 3 developers and 3 QAs",
    "Position": "Developer, from Jan 2021 to Arp 2021"
}

const medaid_pro1 = {
    "Project": "Electronic medical records (EMR)",
    "Description": "<p>Store diagnosis of patient, store consultant minutes of patient, store testings of patient include image CT, MRI, Pikka result. Support doctor view and print report.</p>",
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
    "Position": "Developer, from Aug 2018 to current"
}

const anBinh_pro2 = {
    "Project": "VIP Customer",
    "Description": "<p>Import data from core software when start day, calculate scores for customer based on volume trading of them. Support manager build bonus customer policy.</p>",
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
    "Position": "Developer, from Dec 2015 to Nov 2017"
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

}