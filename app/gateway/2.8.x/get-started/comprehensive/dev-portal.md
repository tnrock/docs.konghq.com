---
title: Publish, Locate, and Consume Services
badge: enterprise
---

Dev Portal provides a single source of truth for all developers to locate, access, and consume services. With intuitive content management for documentation, streamlined developer onboarding, and role-based access control (RBAC), the Dev Portal provides a comprehensive solution for creating and customizing a unified developer experience.

## Before you begin

Make sure the Dev Portal is on. You should have enabled it during [installation](/gateway/{{page.kong_version}}/install-and-run/).

## Enable the Dev Portal for a Workspace

{% navtabs %}
{% navtab Using Kong Manager %}

1. In Kong Manager, open the Workspaces tab and open your workspace (for example, SecureWorkspace).

2. Scroll down in the sidebar, then click the **Overview** link under the Dev Portal section.

3. Click **Enable Developer Portal** and refresh the browser page.

{% endnavtab %}
{% navtab Using the Admin API %}

<!-- codeblock tabs -->
{% navtabs codeblock %}
{% navtab cURL %}
```sh
curl -X PATCH http://<admin-hostname>:8001/workspaces/SecureWorkspace \
  --data config.portal=true
```
{% endnavtab %}
{% navtab HTTPie %}
```sh
http -f PATCH http://<admin-hostname>:8001/workspaces/SecureWorkspace \
  config.portal=true
```
{% endnavtab %}
{% endnavtabs %}
<!-- end codeblock tabs -->

{% endnavtab %}
{% endnavtabs %}
This will expose the Dev Portal at `http://<admin-hostname>:8003/SecureWorkspace.`

After the Dev Portal is enabled for the Workspace, a few new links appear in the left navigation menu. It may take a few seconds for the Settings page to populate.

You can learn more about personalization in the [the Dev Portal documentation](/gateway/{{page.kong_version}}/developer-portal/), including:

* [Customizing the look and feel of the site and editor](/gateway/{{page.kong_version}}/developer-portal/theme-customization/easy-theme-editing/)
* [Managing access](/gateway/{{page.kong_version}}/developer-portal/administration/managing-developers/)
* [Configuring the Dev Portal](/gateway/{{page.kong_version}}/developer-portal/configuration/workspaces/)

## Access and Interact with the Dev Portal

1. Go back to **Dev Portal** > **Overview** and open the link in a new tab, or open the Dev Portal directly using this URL: `http://<admin-hostname>:8003/SecureWorkspace`.

    You’ll see a list of available API catalogs. By default, *httpbin.org* and *Swagger Petstore* appear as examples.

2. Click on the **httpbin.org** entry to explore the API.

    On the left side, tags for the API as configured by the spec are displayed for easy searching.

    On the right, you can see the HTTP methods of the API. Clicking into each method shows its details, lets you test the method, and provides code snippets developers can use to leverage the method in their applications.

3. Test the GET method:

    1. Under **HTTP Methods**, click the GET method.
    2. Click **Try it Out**, then click **Execute**. Review the results of the response.

## Publish a Spec to Dev Portal

In this section, you’re going to add a new spec, the *Kong Vitals API*, to the Dev Portal catalog. The Kong Vitals API shows how {{site.base_gateway}} and connected APIs are performing.

1. In Kong Manager, navigate to **Dev Portal** > **Editor** and open the link in a new tab. The editor lets you customize the Dev Portal.

2. Click on **New File +** to add a new spec.

3. In the New File dialog, open the dropdown and select **spec**, then name the spec `vitals_spec.yaml`.

4. Click on **Create File**.

    The editor creates the file and prepares it for editing. Since you haven’t added any content to the file, the preview displays “Unable to render this definition”.

5. In another tab, open the [Kong Vitals Overview page](/gateway/{{page.kong_version}}/vitals/#using-vitals-api) to download the `vitalsSpec.yaml.` Open it in your favorite text editor and copy the contents of the file.

6. In the Dev Portal editor, clear the contents of the editor, then paste the contents of `vitalsSpec.yaml`.

7. Click **Save Changes**. If done correctly, the preview should show the API now.

8. View the Dev Portal at `http://<admin-hostname>:8003/SecureWorkspace` and notice the new spec published to the Dev Portal.

## Summary

In this topic, you:

* Enabled the Dev Portal on the Workspace `SecureWorkspace`.
* Tested the httpbin `GET` method.
* Added a new spec for the Kong Vitals API to the Dev Portal catalog.
