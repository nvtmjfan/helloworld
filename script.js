let medaid_pro3 = {
    "Project": "Oncology Infomation System (OIS)",
    "Description": "<p>Import, export DICOM file. Store ratheory treamtment plan of patient: eg beam, control points, store testings of patient include image CT, MRI. Support doctor view plan, view image, send plan to RV.</p>",
    "Platform": "<i>Frontend is Angular 6+</i><br><i>Backend is Restfull API .Net Framework 4.6.1 c#</i><br><i>Database is SQL server 2017</i>",
    "Tool": "Visual Code, Visual studio 2019, Sql management tool",
    "TeamSize": "Include 5 developers, 2 QAs and 1 PM",
    "Position": "Developer, from Aug 2018 to current"
}

let medaid_pro2 = {
    "Project": "Review & Verify (RV)",
    "Description": "<p>Store diagnosis of patient, store consultant minutes of patient, store testings of patient include image CT, MRI, Pikka result. Support doctor view and print report.</p>",
    "Platform": "<i>Frontend is silverlight WPF (xaml file) c#</i><br><i>Backend is WCF window service c#</i><br><i>Database is SQL server</i>",
    "Tool": "Visual studio 2010, Sql management tool",
    "TeamSize": "Include 3 developers and 3 QAs",
    "Position": "Developer, from Dec 2017 to Jun 2018"
}

let medaid_pro1 = {
    "Project": "Electronic medical records (EMR)",
    "Description": "<p>Store diagnosis of patient, store consultant minutes of patient, store testings of patient include image CT, MRI, Pikka result. Support doctor view and print report.</p>",
    "Platform": "<i>Frontend is silverlight WPF (xaml file) c#</i><br><i>Backend is WCF window service c#</i><br><i>Database is SQL server</i>",
    "Tool": "Visual studio 2010, Sql management tool",
    "TeamSize": "Include 3 developers and 3 QAs",
    "Position": "Developer, from Dec 2017 to Jun 2018"
}

function bodyOnload() {
    let now = new Date();
    document.getElementById('age').innerHTML = now.getFullYear() - 1988;

    // Load data
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
}