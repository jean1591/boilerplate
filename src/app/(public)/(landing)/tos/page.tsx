import { bgGradient, textGradient } from '@/design/constants'

import { classNames } from '@/utils/classNames'

const companyName = 'YourApp'
const companyUrl = 'https://your-app.com'

export default function ToS() {
  return (
    <div className="my-12">
      <p
        className={classNames(
          bgGradient,
          textGradient,
          'mt-16 text-4xl font-extrabold md:text-5xl'
        )}
      >
        Terms and Conditions
      </p>

      <div className="mt-12 space-y-8">
        <div>
          <p>1. Terms</p>
          <p>
            By accessing this Website, accessible from {companyUrl}, you are
            agreeing to be bound by these Website Terms and Conditions of Use
            and agree that you are responsible for the agreement with any
            applicable local laws. If you disagree with any of these terms, you
            are prohibited from accessing this site. The materials contained in
            this Website are protected by copyright and trade mark law.
          </p>
        </div>

        <div>
          <p>2. Use License</p>
          <p>
            Permission is granted to temporarily download one copy of the
            materials on {companyUrl}'s Website for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc">
            <li className="ml-8">modify or copy the materials;</li>
            <li className="ml-8">
              use the materials for any commercial purpose or for any public
              display;
            </li>
            <li className="ml-8">
              attempt to reverse engineer any software contained on
              {companyUrl}'s Website;
            </li>
            <li className="ml-8">
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li className="ml-8">
              transferring the materials to another person or "mirror" the
              materials on any other server.
            </li>
          </ul>
          <p>
            This will let {companyName}'s Website to terminate upon violations
            of any of these restrictions. Upon termination, your viewing right
            will also be terminated and you should destroy any downloaded
            materials in your possession whether it is printed or electronic
            format.
          </p>
        </div>

        <div>
          <p>3. Disclaimer</p>
          <p>
            All the materials on {companyUrl}'s Website are provided "as is".
            {companyName} makes no warranties, may it be expressed or implied,
            therefore negates all other warranties. Furthermore, {companyName}
            does not make any representations concerning the accuracy or
            reliability of the use of the materials on its Website or otherwise
            relating to such materials or any sites linked to this Website.
          </p>
        </div>

        <div>
          <p>4. Limitations</p>
          <p>
            {companyName} or its suppliers will not be hold accountable for any
            damages that will arise with the use or inability to use the
            materials on {companyUrl}'s Website, even if {companyName} or an
            authorize representative of this Website has been notified, orally
            or written, of the possibility of such damage. Some jurisdiction
            does not allow limitations on implied warranties or limitations of
            liability for incidental damages, these limitations may not apply to
            you. limitations on implied warranties or limitations of liability
            for incidental damages, these limitations may not apply to you.
          </p>
        </div>

        <div>
          <p>5. Revisions and Errata</p>
          <p>
            The materials appearing on {companyUrl}'s Website may include
            technical, typographical, or photographic errors. {companyName}
            will not promise that any of the materials in this Website are
            accurate, complete, or current. {companyName} may change the
            materials contained on its Website at any time without notice.
            {companyName} does not make any commitment to update the materials.
          </p>
        </div>

        <div>
          <p>6. Links</p>
          <p>
            {companyUrl} has not reviewed all of the sites linked to its Website
            and is not responsible for the contents of any such linked site. The
            presence of any link does not imply endorsement by
            {companyName} of the site. The use of any linked website is at the
            user's own risk.
          </p>
        </div>

        <div>
          <p>7. Site Terms of Use Modifications</p>
          <p>
            {companyName} may revise these Terms of Use for its Website at any
            time without prior notice. By using this Website, you are agreeing
            to be bound by the current version of these Terms and Conditions of
            Use.
          </p>
        </div>

        <div>
          <p>8. Your Privacy</p>
          <p>Please read our Privacy Policy.</p>
        </div>

        <p>Last updated: 01 July 2024.</p>
      </div>
    </div>
  )
}
